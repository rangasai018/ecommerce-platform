console.log("E-Shop Loaded Successfully");

document.addEventListener("DOMContentLoaded", () => {

    console.log("All components loaded successfully");

    let cartCount = localStorage.getItem("cartCount") || 0;

    const searchBar = document.querySelector(".search-bar");

    if (searchBar) {

        searchBar.addEventListener("keyup", () => {

            const searchText = searchBar.value.toLowerCase();

            const products = document.querySelectorAll(".card");

            products.forEach(product => {

                const productName = product
                    .querySelector("h3")
                    .innerText
                    .toLowerCase();

                if (productName.includes(searchText)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }

            });

        });

    }

    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            cartCount++;

            localStorage.setItem("cartCount", cartCount);

            alert("Product added to cart!");

            console.log("Cart Items:", cartCount);

        });

    });

});