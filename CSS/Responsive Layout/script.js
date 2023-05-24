// Get the menu toggle button and menu element
const menuToggle = document.getElementById("bars");
const menu = document.querySelector(".menu");

// Add event listener for the menu toggle button
menuToggle.addEventListener("click", () => {
  // Toggle the 'active' class on the menu
  menu.classList.toggle("active");
});
