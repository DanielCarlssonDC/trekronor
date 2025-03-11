/*
document.getElementById("helloworldbutton").addEventListener("click", function () {
    alert("Hello, JavaScript!");
});
*/

const navbarLinks = document.querySelectorAll("#navbar a");
const sections = document.querySelectorAll("section");

navbarLinks.forEach((link, index) => {
	link.addEventListener("click", function (event) {
		event.preventDefault();
		sections[index].scrollIntoView({ behavior: "smooth"});
	});
});

window.addEventListener("scroll", function () {
	let currentSection = null;

	sections.forEach((section, index) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight) {
			currentSection = index;
		}
	});

	navbarLinks.forEach(link => link.classList.remove("active"));

	if (currentSection !== null) {
		navbarLinks[currentSection].classList.add("active");

		navbarLinks[currentSection].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const socialIcons = document.querySelectorAll(".headerCol3 i");

	const facebookIcon = socialIcons[0];
	const instagramIcon = socialIcons[1];

	facebookIcon.addEventListener("mouseover", function () {
		this.style.color = "#1877F2";
	});

	facebookIcon.addEventListener("mouseout", function() {
		this.style.color = "white";
	});
	instagramIcon.addEventListener("mouseover", function () {
		this.style.background = "linear-gradient(45deg, #F58529, #FEDA77, #DD2A7B, #8134AF, #515BD4)";
        this.style.webkitBackgroundClip = "text";
        this.style.webkitTextFillColor = "transparent";
	});

	instagramIcon.addEventListener("mouseout", function() {
		this.style.background = "none";
        this.style.webkitTextFillColor = "white";
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const spotlight = document.getElementById("mouseSpotlight");

	document.addEventListener("mousemove", function (event) {
		spotlight.style.left = event.clientX + "px";
		spotlight.style.top = event.clientY + "px";
		spotlight.style.display = "block";
	});

	document.addEventListener("mouseleave", function () {
		spotlight.style.display = "none";
	});
});

$(document).ready(function() {
	$(".monketitle").hover(
		function() {
			$(".monketitle").animate({
			color: "yellow",
			fontSize: "4rem"
			}, 200);
		},
		function() {
			$(".monketitle").animate({
			color: "white",
			fontSize: "3rem"
			}, 200);
		}
	);
});

$(document).ready(function() {
	$(".listframe ul li").hide();
  
	$("#helloworldbutton").click(function() {
		$(".listframe ul li").each(function(index) {
			$(this).delay(index * 300).slideToggle(500);
		});
	});
});