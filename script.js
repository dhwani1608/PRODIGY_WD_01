let menu_items = document.querySelectorAll(".navbar-brand");

menu_items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "lightblue";
    })
});

menu_items.forEach((item) => {
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "#e3f2fd";
    })
});
