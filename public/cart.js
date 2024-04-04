let products = {
    data: [
        {
            id: "1",
            productName: "Metallic Brake Pads",
            category: "Parts",
            price: "90",
            image: "part-photos/car-metallicbrakes.png"
        },
        {
            id: "2",
            productName: "Organic Brake Pads",
            category: "Parts",
            price: "60",
            image: "part-photos/car-organicbrakes.png"
        },
        {
            id: "3",
            productName: "Ceramic Brake Pads",
            category: "Parts",
            price: "30",
            image: "part-photos/car-ceramicbrakes.png"
        },
        {
            id: "4",
            productName: "Performance Wheel",
            category: "Wheels and Tires",
            price: "150",
            image: "part-photos/car-wheel.png"
        },
        {
            id: "5",
            productName: "All-Season Tire",
            category: "Wheels and Tires",
            price: "100",
            image: "part-photos/car-wheel.png"
        },
        {
            id: "6",
            productName: "Body Kit",
            category: "Exterior Parts",
            price: "2300",
            image: "part-photos/car-exterior.png"
        },
        {
            id: "7",
            productName: "Tow Hitch",
            category: "Exterior Parts",
            price: "120",
            image: "part-photos/car-towhitch.png"
        },
        {
            id: "8",
            productName: "Custom Bumper",
            category: "Body Parts",
            price: "230",
            image: "part-photos/car-bumper.png"
        },
        {
            id: "9",
            productName: "Front Fender",
            category: "Body Parts",
            price: "120",
            image: "part-photos/car-fender.png"
        },
        {
            id: "10",
            productName: "Inner Fender",
            category: "Body Parts",
            price: "100",
            image: "part-photos/car-innerfender.png"
        },
        {
            id: "11",
            productName: "Headlight Bulb",
            category: "Lighting",
            price: "10",
            image: "part-photos/car-lightbulb.png"
        },
        {
            id: "12",
            productName: "Signal",
            category: "Lighting",
            price: "20",
            image: "part-photos/car-signallight.png"
        },
        {
            id: "13",
            productName: "Floor Mat",
            category: "Interior",
            price: "400",
            image: "part-photos/car-mat.png"
        },
        {
            id: "14",
            productName: "Seat",
            category: "Interior",
            price: "400",
            image: "part-photos/car-seatcover.png"
        },
        {
            id: "15",
            productName: "Shift Knob",
            category: "Interior",
            price: "45",
            image: "part-photos/car-shiftknob.png"
        },
        {
            id: "16",
            productName: "Pedals",
            category: "Interior",
            price: "155",
            image: "part-photos/car-pedals.png"
        },
        {
            id: "16",
            productName: "Wheel Cover",
            category: "Interior",
            price: "25",
            image: "part-photos/car-wheelcover.png"
        }
    ]
};

let cart = [];
loadCart();

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartUI(); // Make sure the UI reflects the loaded cart
    }
}

// Function to -add a product to the cart
function addToCart(productId) {
    const product = products.data.find(p => p.id === productId);
    if (!product) return; 

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
   
    saveCart();
    updateCartUI();
    showNotification(`Added ${product.productName} to the cart.`);
}

// Function to update the cart display
function updateCartUI() {
    const cartElement = document.getElementById('cart-items');
    cartElement.innerHTML = ''; // Clear the current display

    let totalPrice = 0; // Initialize total price

    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Your cart is empty.</p>';
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.productName}">
            <div class="content">
                <div class="name">${item.productName}</div>
                <div class="price">$${item.price}</div>
            </div>
            <div class="quantity">
                <button onclick="changeQuantity('${item.id}', -1)">-</button>
                <span class="value">${item.quantity}</span>
                <button onclick="changeQuantity('${item.id}', 1)">+</button>
            </div>
        `;
        cartElement.appendChild(itemElement);

        // Calculate total price
        totalPrice += item.price * item.quantity;
    });

    // Update total price display
    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
}

function showNotification(message) {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    // Add the notification to the container
    container.appendChild(notification);
    container.style.display = 'block';

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
        notification.remove();
        if (container.children.length === 0) {
            container.style.display = 'none';
        }
    }, 3000);
}

// Function to change the quantity of a cart item
function changeQuantity(productId, delta) {
    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) return;

    cartItem.quantity += delta;
    if (cartItem.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }
    saveCart();
    updateCartUI();
}

// Attach click event listeners to 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        addToCart(this.getAttribute('data-product-id'));
    });
});

// Show the cart
document.getElementById('cart-icon').addEventListener('click', function() {
    document.getElementById('cart-overlay').style.display = 'block';
});

// Hide the cart
document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart-overlay').style.display = 'none';
});
