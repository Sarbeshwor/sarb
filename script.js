const menuIcon = document.getElementById('menuIcon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
const changingText = document.getElementById("changing-text");
const texts = ["Freelancer", "Programmer", "Student"];
let index = 0;

    var roles = ["Designer", "Programmer","Athlete"]; // Add more roles if needed
    var descriptions = ["Passionate Figma Designer with an obsession for pixel-perfection. Transforming ideas into intuitive, visually stunning designs","Passionate coder by day, problem solver by night.", "Chasing goals and breaking records."]; // Add more descriptions if needed
    var currentIndex = 0;
    var dynamicRoleElement = document.querySelector(".dynamic-role");
    var dynamicDescriptionElement = document.querySelector(".dynamic-description");
    var seeMoreButton = document.querySelector(".see-more-button");

    function updateDynamicContent() {
        dynamicRoleElement.textContent = roles[currentIndex];
        dynamicDescriptionElement.textContent = descriptions[currentIndex];
        currentIndex = (currentIndex + 1) % roles.length;
    }

    function handleSeeMoreClick() {
        // Update content and perform other actions when "See More" is clicked
        // For example, you could navigate to a detailed page or expand the content.
    }

    // Initial call to set the first role and description
    updateDynamicContent();

    // Set an interval to update the content every 5 seconds
    setInterval(updateDynamicContent, 5000); // Change the interval as needed

    // Add a click event listener to the "See More" button
    seeMoreButton.addEventListener("click", handleSeeMoreClick);