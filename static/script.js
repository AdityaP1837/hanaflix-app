const mobileNav = document.querySelector(".mobile-nav");
const mobileNavToggleBtn = document.querySelector(".mobile-toggle");

mobileNavToggleBtn.addEventListener("click", () => {
	if (mobileNav.classList.contains("active")) {
		mobileNav.classList.remove("active");
		mobileNavToggleBtn.querySelector("i").classList.remove("fa-xmark");
		mobileNavToggleBtn.querySelector("i").classList.add("fa-bars");
	} else {
		mobileNav.classList.add("active");
		mobileNavToggleBtn.querySelector("i").classList.add("fa-xmark");
		mobileNavToggleBtn.querySelector("i").classList.remove("fa-bars");
	}
});
