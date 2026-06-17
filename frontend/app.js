console.log("E-Shop Loaded Successfully");

document.addEventListener("DOMContentLoaded", () => {

    console.log("All components loaded successfully");

    const searchBar = document.querySelector(".search-bar");

    if (searchBar) {

        searchBar.addEventListener("focus", () => {
            console.log("Search bar selected");
        });

        searchBar.addEventListener("keyup", () => {
            console.log("Searching for:", searchBar.value);
        });
    }

    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {
            console.log("Product added to cart");
        });

    });

});