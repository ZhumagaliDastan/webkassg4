// JavaScript code for your shop.html

// JavaScript object with product information
const products = [
    {
        name: "Product 1",
        description: "Description of Product 1."
    }
];

// Add click event listeners to Buy Now buttons
const buyProduct1 = document.getElementById("buyProduct1");
buyProduct1.addEventListener("click", () => {
    alert(`You bought ${products[0].name}`);
});
