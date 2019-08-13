var item1 = document.querySelector(".catalog-item-1");
var item2 = document.querySelector(".catalog-item-2");
var item3 = document.querySelector(".catalog-item-3");
var item4 = document.querySelector(".catalog-item-4");
var hover1 = document.querySelector(".catalog-item-one .hover-element");
var hover2 = document.querySelector(".catalog-item-two .hover-element");
var hover3 = document.querySelector(".catalog-item-three .hover-element");
var hover4 = document.querySelector(".catalog-item-four .hover-element");
var close1 = document.querySelector(".catalog-item-one");
var close2 = document.querySelector(".catalog-item-two");
var close3 = document.querySelector(".catalog-item-three");
var close4 = document.querySelector(".catalog-item-four");

item1.addEventListener("mouseenter", function () {
	hover1.classList.remove("visually-hidden");
	item1.style.opacity = '0.7';
});

close1.addEventListener("mouseleave", function () {
	hover1.classList.add("visually-hidden");
	item1.style.opacity = '1';
});

item2.addEventListener("mouseenter", function () {
	hover2.classList.remove("visually-hidden");
	item2.style.opacity = '0.7';
});

close2.addEventListener("mouseleave", function () {
	hover2.classList.add("visually-hidden");
	item2.style.opacity = '1';
});

item3.addEventListener("mouseenter", function () {
	hover3.classList.remove("visually-hidden");
	item3.style.opacity = '0.7';
});

close3.addEventListener("mouseleave", function () {
	hover3.classList.add("visually-hidden");
	item3.style.opacity = '1';
});

item4.addEventListener("mouseenter", function () {
	hover4.classList.remove("visually-hidden");
	item4.style.opacity = '0.7';
});

close4.addEventListener("mouseleave", function () {
	hover4.classList.add("visually-hidden");
	item4.style.opacity = '1';
});