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

// Dark and Light Mode
const toggleThemeBtn = document.getElementById("toggleTheme");
const themeAnnouncement = document.getElementById("themeAnnouncement");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const themeBtnText = document.getElementById("themeBtnText");
let currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  toggleThemeBtn.setAttribute("aria-label", "Switch to light mode");
  themeAnnouncement.textContent = "Dark mode is enabled";
  themeBtnText.textContent = "Switch to light mode";
} else {
  toggleThemeBtn.setAttribute("aria-label", "Switch to dark mode");
  themeAnnouncement.textContent = "Light mode is enabled";
  themeBtnText.textContent = "Switch to dark mode";
}

toggleThemeBtn.addEventListener("click", () => {
  if (currentTheme === "light") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    currentTheme = "dark";
    toggleThemeBtn.setAttribute("aria-label", "Switch to light mode");
    themeAnnouncement.textContent = "Dark mode is enabled";
    themeBtnText.textContent = "Switch to light mode";
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
    sun.classList.add("block");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    currentTheme = "light";
    toggleThemeBtn.setAttribute("aria-label", "Switch to dark mode");
    themeAnnouncement.textContent = "Light mode is enabled";
    themeBtnText.textContent = "Switch to dark mode";
    moon.classList.remove("hidden");
    moon.classList.add("block");
    sun.classList.add("hidden");
  }
});

// On page load or when changing themes,
// best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  moon.classList.add("hidden");
  sun.classList.remove("hidden");
  sun.classList.add("block");
} else {
  document.documentElement.classList.remove("dark");
  moon.classList.remove("hidden");
  moon.classList.add("block");
  sun.classList.add("hidden");
}
