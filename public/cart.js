document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartButton = document.getElementById(close-cart);
    const cartIcon = document.getElementById('cart-icon');
  
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
    });
  
    function addToCart(productId) {
        const product = { id: productId, quantity: 1 }; // Basic product structure
        const existingProduct = cart.find(p => p.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1; // Increase quantity if product already in cart
        } else {
            cart.push(product); // Add new product to cart
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in localStorage
        alert(`Product ${productId} added to cart`);
    }
    });
  
  document.addEventListener('DOMContentLoaded', function() {
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    document.getElementById('cart').addEventListener('click', function() {
        updateCartUI();
        cartOverlay.style.display = 'flex'; // Show the cart overlay
    });
  
    document.getElementById('close-cart').addEventListener('click', function() {
        cartOverlay.style.display = 'none'; // Hide the cart overlay
    });
  
    function updateCartUI() {
        cartItemsContainer.innerHTML = ''; // Clear the cart UI
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <span>Product ID: ${item.id}, Quantity: ${item.quantity}</span>
                <button onclick="removeFromCart('${item.id}')">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
    cartIcon.addEventListener('click', function() {
        updateCartUI();
        cartOverlay.style.display = 'flex';
    })

    closeCartButton.addEventListener('click', function() {
        cartOverlay.style.display = 'none';
    });
    
    window.removeFromCart = function(productId) {
        const newCart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newCart));
        updateCartUI(); // Update the cart UI to reflect the removal
    };
  });