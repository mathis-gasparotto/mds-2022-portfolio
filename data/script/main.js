$(document).ready(function() {

  const navbar = document.getElementById("navbar");
  const navbar_height = navbar.getBoundingClientRect().height;
  window.onscroll = function() {
    let windowY = window.pageYOffset;
    let contentY = document.getElementById("page-content").getBoundingClientRect().top + windowY;
    let navbar_scroll = navbar_height + windowY;
    navbar.style.top = windowY + "px";
    if (navbar_scroll >= contentY) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    if (windowY >= 50) {
      navbar.classList.add('mobile-scrolled');
    } else {
      navbar.classList.remove('mobile-scrolled');
    }
  }
  
  $(".scroll-animation").click(function(event) {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
  });

  $(".scroll-to-top").click(function(event) {
    event.preventDefault();
    scrollToTop();
  });

  function scrollToTop() {
    $("html, body").animate({
      scrollTop: $("body").offset().top
    }, 1000);
    navbar.classList.remove('scrolled');
  };

  
  const hamburger_menu = document.querySelector(".hamburger-menu");

  const container = document.querySelector(".screen-container");
  
  const click_to_select = document.querySelector(".screen-container .main .click-to-select");
 
  const skills = document.getElementById("skills");
  const skills_top = skills.getBoundingClientRect().top;

  const projects = document.getElementById("projects");
  const projects_top = projects.getBoundingClientRect().top;

  const who = document.getElementById("who");
  const who_top = who.getBoundingClientRect().top;

  const contact = document.getElementById("contact");
  const contact_top = contact.getBoundingClientRect().top;

  const nav_links = document.querySelectorAll(".nav-link");
 
  hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
           
    click_to_select.addEventListener("click", () => {
      container.classList.remove("active");
    });

    nav_links.forEach(nav_link => {
      nav_link.addEventListener("click", () => {
        container.classList.remove("active");
        event.preventDefault();
        window.scroll({
          top: (eval(nav_link.getAttribute('href').replace('#', '') + '_top') - navbar_height) + 5,
          behavior: 'smooth',
        });
      });
    });
    
  });
  
})