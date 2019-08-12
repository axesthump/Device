var search = document.querySelector(".main-header-search-input");
var searchBtn = document.querySelector(".search-btn");

search.addEventListener("focus", function () {
	searchBtn.classList.remove("visually-hidden");
});

search.addEventListener("blur", function () {
	searchBtn.classList.add("visually-hidden");
});