let lastScroll = 0;
const header = document.querySelector(".tophead");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scrolling down → hide
    header.classList.add("hidden");
  } else {
    // scrolling up → show
    header.classList.remove("hidden");
  }

  lastScroll = currentScroll;
});



// grab all sections + nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // offset for fixed header
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");
const links = document.querySelectorAll(".menu-right a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");  // animate hamburger → X
  dropdown.classList.toggle("show");     // toggle menu
});

// Close when a link is clicked
links.forEach(link => {
  link.addEventListener("click", () => {
    dropdown.classList.remove("show");
    hamburger.classList.remove("active");
  });
});