* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  color: #ffffff;
  line-height: 1.6;
}

/* Container styling */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center; /* Center vertically */
}

/* Navbar styling */
nav {
  background-color: #ffffff;
  background: linear-gradient(90deg, #ffffff, #ffffff);
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  animation: fadeIn 2.5s ease-in-out;
}

nav h1 {
  font-size: 24px;
  background: linear-gradient(135deg, #000000, #000000);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Align links to the left and social icons to the right */
.nav-links-container {
  display: flex;
  align-items: center;
  margin-left: auto; /* Push this to the right side */
}

/* Styling for the navbar links */
nav ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0; /* Remove any margin here */
  margin-right: 0; /* Ensure there is no margin on the right */
}

nav ul li {
  margin-right: 30px; /* Space between each navigation link */
}

nav ul li a {
  position: relative;
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  transition: color 0.4s;
  display: inline-block;
}

nav ul li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: #000000;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.4s ease;
}

nav ul li a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

nav ul li a:hover {
  color: #000000;
}

/* Styling for social media icons */
nav .nav-links-container a {
  color: #000000;
  font-size: 20px;
  margin-left: 20px; /* Space between each social media icon */
  transition: color 0.3s;
}

nav .nav-links-container a:hover {
  color: #000000;
}

/* Hamburger menu */
.navbar .hamburger {
  display: none;
}

/* Media Query for responsiveness */
@media screen and (max-width: 768px) {
  nav .container {
    flex-direction: column;
    align-items: flex-start;
  }

  nav .nav-links-container {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }

  nav .nav-links-container a {
    margin-left: 0;
    margin-bottom: 10px; /* Add spacing between the links when vertically stacked */
  }

  nav .btn {
    margin-left: 0;
    margin-top: 10px; /* Space between button and links */
  }

  .navbar .hamburger {
    display: block;
  }
}
