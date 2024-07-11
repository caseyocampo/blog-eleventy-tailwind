const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");
const header = document.getElementsByTagName("header")[0];

// Responsive navigation menu
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
    // header.classList.add("header-border");
  } else if (!menuList.classList.contains("hidden")) {
    menuList.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
    // header.classList.remove("header-border");
  }
}
