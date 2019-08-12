var catalog = document.querySelector(".catalog");
var dropDownMenu = document.querySelector(".drop-down-menu");
var close = document.querySelector(".catalog-menu-hover");

catalog.addEventListener("mouseenter", function () {
	dropDownMenu.classList.add("active");
});

dropDownMenu.addEventListener("mouseleave", function () {
	dropDownMenu.classList.remove("active");
});