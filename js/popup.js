var writeUs = document.querySelector(".modal-write-us");
var writeUsLink = document.querySelector(".write-us-link");
var map = document.querySelector(".modal-map");
var mapLink = document.querySelector(".map-link");
var closeW = document.querySelector(".modal-close");
var closeM = document.querySelector(".modal-close-m");

writeUsLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUs.classList.add("active-popup");
});

closeW.addEventListener("click", function () {
	writeUs.classList.remove("active-popup");
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.add("active-popup");
});

closeM.addEventListener("click", function () {
	map.classList.remove("active-popup");
});