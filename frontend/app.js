```javascript
console.log("E-Shop Loaded Successfully");

document.addEventListener("DOMContentLoaded", () => {
    console.log("All components loaded successfully");
});

const searchBar = document.querySelector(".search-bar");

if (searchBar) {
    searchBar.addEventListener("focus", () => {
        console.log("Search bar selected");
    });
}
```
