let products = {
    data: [
        {
            productName: "Metallic Brake Pads",
            category: "Parts",
            price: "90",
            image: "part-photos/car-brakes.png"
        },
        {
            productName: "Semi-Metallic Brake Pads",
            category: "Parts",
            price: "60",
            image: "part-photos/car-brakes.png"
        },
        {
            productName: "Ceramic Brake Pads",
            category: "Parts",
            price: "30",
            image: "part-photos/car-brakes.png"
        },
        {
            productName: "Performance Wheel",
            category: "Wheels and Tires",
            price: "150",
            image: "part-photos/car-wheel"
        },
        {
            productName: "All-Season Tire",
            category: "Wheels and Tires",
            price: "100",
            image: "part-photos/car-wheel"
        },
        {
            productName: "Body Kit",
            category: "Exterior Parts",
            price: "2300",
            image: "part-photos/car-exterior"
        },
        {
            productName: "Tow Hitch",
            category: "Exterior Parts",
            price: "120",
            image: "part-photos/car-exterior"
        },
        {
            productName: "Custom Bumper",
            category: "Body Parts",
            price: "230",
            image: "part-photos/car-fender"
        },
        {
            productName: "Front Fender",
            category: "Body Parts",
            price: "120",
            image: "part-photos/car-fender"
        },
        {
            productName: "Inner Fender",
            category: "Body Parts",
            price: "100",
            image: "part-photos/car-fender"
        },
        {
            productName: "Headlight Bulb",
            category: "Lighting",
            price: "10",
            image: "partphotos/car-light"
        },
        {
            productName: "Signal",
            category: "Lighting",
            price: "20",
            image: "partphotos/car-light"
        },
        {
            productName: "Floor Mat",
            category: "Interior",
            price: "400",
            image: "partphotos/car-mat"
        },
        {
            productName: "Seat",
            category: "Interior",
            price: "400",
            image: "partphotos/car-mat"
        },
        {
            productName: "Shift Knob",
            category: "Interior",
            price: "45",
            image: "partphotos/car-mat"
        },
        {
            productName: "Pedals",
            category: "Interior",
            price: "155",
            image: "partphotos/car-mat"
        },
        {
            productName: "Wheel Cover",
            category: "Interior",
            price: "25",
            image: "partphotos/car-mat"
        }
    ]
};
for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("product-item", i.category);
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    card.appendChild(image);
    let name = document.createElement("h3");
    name.innerText = i.productName;
    let price = document.createElement("p");
    price.textContent = "$", i.price;
    let button = document.createElement("button");
    button.textContent = "Add to Cart";
    let container = dicument.createElement("div");

    document.querySelector(".product-list").appendChild(card);
}

document.getElementById("search").addEventListener
("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let cards = document.querySelectorAll(".card")
    console.log(searchInput)
})