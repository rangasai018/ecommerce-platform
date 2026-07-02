console.log("E-Shop Loaded Successfully");

document.addEventListener("DOMContentLoaded", () => {

    console.log("All components loaded successfully");

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

            const card = button.closest(".card");

            if (!card) return;

            const productName =
                card.querySelector("h3").innerText;

            const productPrice =
                card.querySelector(".price").innerText;

            let cart =
                JSON.parse(localStorage.getItem("cart")) || [];

            const alreadyExists = cart.find(
                item => item.name === productName
            );

            if (alreadyExists) {

                alert(productName + " is already in your cart.");
                return;

            }

            cart.push({
                name: productName,
                price: productPrice
            });

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            alert(productName + " added to cart successfully!");

        });

    });

});