// 1. Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".sticky-nav .nav-list li");

// 2. Add an event listener for scrolling
window.addEventListener("scroll", () => {
  let current = "";

  // 3. Loop through sections to see which one is on screen
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // 60px is an offset to trigger the switch slightly earlier
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  // 4. Remove 'active' class from all and add to the current one
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.querySelector('a').getAttribute("href").includes(current)) {
      li.classList.add("active");
      
      // Optional: Auto-scroll the nav bar itself to keep active item in view
      li.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
});