document.addEventListener('DOMContentLoaded', function () {
    // Get the mobile menu button and the navbar
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navbar = document.querySelector('.navbar');
  
    // Toggle the visibility of the navbar when the button is clicked
    mobileMenuButton.addEventListener('click', function () {
      navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
    });
  });