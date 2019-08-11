var firstSlide = document.querySelector(".first-slide");
var firstSlideBtn = document.querySelector(".first-slide-btn");
var secondSlide = document.querySelector(".second-slide");
var secondSlideBtn = document.querySelector(".second-slide-btn");
var thirdSlide = document.querySelector(".third-slide");
var thirdSlideBtn = document.querySelector(".third-slide-btn");

firstSlideBtn.addEventListener("click", function () {

	if (thirdSlide.classList.contains("slider-item_active")) {
		thirdSlide.classList.remove("slider-item_active");
		thirdSlideBtn.classList.remove("active-slide-btn");
	} else {
		secondSlide.classList.remove("slider-item_active");
		secondSlideBtn.classList.remove("active-slide-btn");
	}

	firstSlide.classList.add("slider-item_active");
	firstSlideBtn.classList.add("active-slide-btn");
});

secondSlideBtn.addEventListener("click", function () {

	if (firstSlide.classList.contains("slider-item_active")) {
		firstSlide.classList.remove("slider-item_active");
		firstSlideBtn.classList.remove("active-slide-btn");
	} else {
		thirdSlide.classList.remove("slider-item_active");
		thirdSlideBtn.classList.remove("active-slide-btn");
	}

	secondSlide.classList.add("slider-item_active");
	secondSlideBtn.classList.add("active-slide-btn");
});

thirdSlideBtn.addEventListener("click", function () {

	if (secondSlide.classList.contains("slider-item_active")) {
		secondSlide.classList.remove("slider-item_active");
		secondSlideBtn.classList.remove("active-slide-btn");
	} else {
		firstSlide.classList.remove("slider-item_active");
		firstSlideBtn.classList.remove("active-slide-btn");
	}

	thirdSlide.classList.add("slider-item_active");
	thirdSlideBtn.classList.add("active-slide-btn");
});