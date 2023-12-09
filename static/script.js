const mobileNav = document.querySelector(".mobile-nav");
const mobileNavToggleBtn = document.querySelector(".mobile-toggle");

mobileNavToggleBtn.addEventListener("click", () => {
	mobileNav.classList.toggle("active");
});
