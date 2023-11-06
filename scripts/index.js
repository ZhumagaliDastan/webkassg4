// JavaScript code for your index.html

// JavaScript object with product information
const products = [
    {
        name: "Hoodie 1",
        price: "$29.99",
        description: "This is a comfortable and stylish hoodie with a classic design. It's available in various sizes and colors to suit your style.",
        quantity: 5
    },
    {
        name: "Hoodie 2",
        price: "$39.99",
        description: "This hoodie features a trendy design with a hood and front pocket. It's perfect for casual wear and is available in various colors.",
        quantity: 9
    },
    {
        name: "Hoodie 3",
        price: "$49.99",
        description: "This premium hoodie with specific print is made with high-quality materials and offers exceptional warmth and comfort. Available in limited quantities.",
        quantity: 3
    }
];

// Add click event listeners to Buy Now buttons
const buyButton1 = document.getElementById("buyButton1");
buyButton1.addEventListener("click", () => {
    // Handle the click event for the first product
    if (products[0].quantity > 0) {
        alert(`You bought ${products[0].name}`);
        products[0].quantity -= 1;
    } else {
        alert("Sorry, this product is out of stock.");
    }
});

const buyButton2 = document.getElementById("buyButton2");
buyButton2.addEventListener("click", () => {
    // Handle the click event for the second product
    if (products[1].quantity > 0) {
        alert(`You bought ${products[1].name}`);
        products[1].quantity -= 1;
    } else {
        alert("Sorry, this product is out of stock.");
    }
});

const buyButton3 = document.getElementById("buyButton3");
buyButton3.addEventListener("click", () => {
    // Handle the click event for the third product
    if (products[2].quantity > 0) {
        alert(`You bought ${products[2].name}`);
        products[2].quantity -= 1;
    } else {
        alert("Sorry, this product is out of stock.");
    }
});
