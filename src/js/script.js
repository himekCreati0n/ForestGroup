const burgerBtn = document.querySelector('.burger-btn');
const mobileNav = document.querySelector('.nav-mobile');
const links = document.querySelectorAll('.nav-item');
const footerYear = document.querySelector('.footer__year');
const allMobileLinks = document.querySelectorAll('.nav-item-mobile');
const burgerBtnBars = document.querySelectorAll('.burger-btn__bars');
const sections = document.querySelectorAll('.section');
let sectionID


const handleNav = () => {
	mobileNav.classList.toggle('nav-mobile--active');
	burgerBtn.classList.toggle('burger-btn--active');
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

allMobileLinks.forEach((link) => {
	link.addEventListener('click', handleNav);
});

const handleScrollSpy = () => {
	const sectionId = [];

	sections.forEach((section) => {
		if (window.scrollY <= section.offsetTop + section.offsetHeight - 100) {
			sectionId.push(section);

			const activeSection = document.querySelector(`[href*="${sectionId[0].id}"]`);

			links.forEach((link) => {
				link.classList.remove('nav-item-active');
			});
			activeSection.classList.add('nav-item-active');
		}
	});
};

 
 window.addEventListener("scroll", handleObserver);
window.addEventListener('scroll', handleScrollSpy);
burgerBtn.addEventListener('click', handleNav);

