const menuIcon = document.getElementById('menuIcon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
const changingText = document.getElementById("changing-text");
const texts = ["Freelancer", "Programmer", "Student"];
let index = 0;

						