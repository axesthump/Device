var deliviry = document.querySelector(".services-description-deliviry");
var deliviryBtn = document.querySelector(".deliviry a");
var deliviryBG = document.querySelector(".deliviry");
var warranty = document.querySelector(".services-description-warranty");
var warrantyBtn = document.querySelector(".warranty a");
var warrantyBG = document.querySelector(".warranty");
var credit = document.querySelector(".services-description-credit");
var creditBtn = document.querySelector(".credit a");
var creditBG = document.querySelector(".credit");

deliviryBtn.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (warranty.classList.contains("active-services")) {
		warranty.classList.remove("active-services");
		warrantyBG.classList.remove("active-service");
	} else {
		credit.classList.remove("active-services");
		creditBG.classList.remove("active-service");
	}

	deliviry.classList.add("active-services");
	deliviryBG.classList.add("active-service");
});

warrantyBtn.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (deliviry.classList.contains("active-services")) {
		deliviry.classList.remove("active-services");
		deliviryBG.classList.remove("active-service");
	} else {
		credit.classList.remove("active-services");
		creditBG.classList.remove("active-service");
	}

	warranty.classList.add("active-services");
	warrantyBG.classList.add("active-service");
});

creditBtn.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (deliviry.classList.contains("active-services")) {
		deliviry.classList.remove("active-services");
		deliviryBG.classList.remove("active-service");
	} else {
		warranty.classList.remove("active-services");
		warrantyBG.classList.remove("active-service");
	}

	credit.classList.add("active-services");
	creditBG.classList.add("active-service");
});