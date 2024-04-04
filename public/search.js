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
for (let i of products.data) {
    let item = document.createElement("div");
    item.classList.add("product-item", i.category.replace(/\s+/g, '-').toLowerCase()); // Added replace to handle categories with spaces
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    item.appendChild(image);
    let name = document.createElement("h3");
    name.classList.add("name")
    name.innerText = i.productName;
    item.appendChild(name); // Corrected to append the name
    let price = document.createElement("p");
    price.classList.add("price")
    price.textContent = "$" + i.price; // Corrected concatenation
    item.appendChild(price); // Corrected to append the price
    let button = document.createElement("button");
    button.textContent = "Add to Cart";
    item.appendChild(button); // Corrected to append the button

    document.querySelector(".product-list").appendChild(item);
}

document.getElementById("search").addEventListener
    ("click", () => {
        search();
    });

function search(searchInput = '') {
    if (searchInput.length == 0){
        searchInput = document.getElementById("search-input").value;
    }
    let items = document.querySelectorAll(".product-item");
    
    items.forEach((item) => {
        // Assuming the product name is in an element with class 'name' inside each item
        let name = item.querySelector(".name").innerText.toLowerCase(); // Convert product name to lowercase
        if (name.includes(searchInput)) {
            item.style.display = ""; // Show the item if the name matches
        } else {
            item.style.display = "none"; // Hide the item if the name does not match
        }
    });
}
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('query');
    search(searchQuery)
}