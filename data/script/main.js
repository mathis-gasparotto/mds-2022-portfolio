$(document).ready(function() {

  // const navbar = document.getElementById("navbar");
  const header = document.getElementById("header");
  const header_height = header.getBoundingClientRect().height;
  const mobile_navbar = document.querySelector(".nav-mobile");
  const mobile_navbar_height = mobile_navbar.getBoundingClientRect().height;
  window.onscroll = function() {
    let windowY = window.pageYOffset;
    let windowY_bottom = windowY + window.innerHeight;

    mobile_navbar.style.bottom = windowY_bottom + 'px';

    let contentY = document.getElementById("page-content").getBoundingClientRect().top + windowY;
    let header_scroll = header_height + windowY;
    header.style.top = windowY + "px";
    if (windowY >= 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    if (header_scroll >= contentY) {
      header.classList.add('desktop-scrolled');
    } else {
      header.classList.remove('desktop-scrolled');
    }
  }
  
  $(".scroll-animation").click(function(event) {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - header_height
    }, 1000);
  });

  $(".scroll-to-top").click(function(event) {
    event.preventDefault();
    scrollToTop();
  });

  function scrollToTop() {
    $("html, body").animate({
      scrollTop: $("body").offset().top - header_height
    }, 1000);
    header.classList.remove('scrolled', 'desktop-scrolled');
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

  const desktop_nav_links = document.querySelectorAll(".nav-desktop .nav-link");

  const main = document.querySelector(".main .page");
   
  hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");

    click_to_select.addEventListener("click", () => {
      container.classList.remove("active");
    });

    click_to_select.style.height = main.getBoundingClientRect().height + 'px';

    desktop_nav_links.forEach(nav_link => {
      nav_link.addEventListener("click", () => {
        container.classList.remove("active");
        event.preventDefault();
        window.scroll({
          top: (eval(nav_link.getAttribute('href').replace('#', '') + '_top') - header_height) + 5,
          behavior: 'smooth',
        });
      });
    });
    
  });
  
})