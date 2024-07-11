const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");
const header = document.getElementsByTagName("header")[0];

// Responsive navigation menu
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
  } else if (!menuList.classList.contains("hidden")) {
    menuList.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  }
}

// Style active nav link

let currentUrl = window.location.href;

// Function to extract the slug from the URL
let getSlug = (url) => new URL(url).pathname.match(/[^\/]+/g);

// Select all navigation links
let navLinks = document.querySelectorAll(".nav-link");

// Loop through each navigation link
for (let i = 0; i < navLinks.length; i++) {
  // Compare the text content of each link with the slug
  if (
    getSlug(currentUrl) !== null
      ? navLinks[i].textContent.toLowerCase() === getSlug(currentUrl)[0]
      : false
  ) {
    // Add a class to style the link
    navLinks[i].classList.add("current-link");
  }
}
