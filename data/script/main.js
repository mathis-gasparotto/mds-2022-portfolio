$(document).ready(function() {

  // const navbar = document.getElementById("navbar");
  const header = document.getElementById("header");
  const header_height = header.getBoundingClientRect().height;
  const mobile_navbar = document.querySelector(".nav-mobile");
  const mobile_navbar_height = mobile_navbar.getBoundingClientRect().height;

  const main = document.querySelector(".main .page");


  // mobile_navbar.style.top = window.pageYOffset + window.innerHeight - mobile_navbar_height + 'px';

  main.style.paddingBottom = mobile_navbar_height + 'px';

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

  const nav_skills = document.getElementById('nav-skills');
  const nav_projects = document.getElementById('nav-projects');
  const nav_who = document.getElementById('nav-who');
  const nav_contact = document.getElementById('nav-contact');

  const go_to_top = document.getElementById('go-to-top');
  const go_to_top_height = go_to_top.getBoundingClientRect().height;

  go_to_top.style.top = window.pageYOffset + window.innerHeight - go_to_top_height - 30 + 'px';

  window.onscroll = function() {
    let windowY = window.pageYOffset;

    go_to_top.style.top = windowY + window.innerHeight - go_to_top_height - 30 + 'px';

    let contentY = document.getElementById("page-content").getBoundingClientRect().top + windowY;
    let header_scroll = header_height + windowY;
    header.style.top = windowY + "px";
    if (header_scroll >= contentY) {
      header.classList.add('scrolled');
      go_to_top.style.opacity = 1;
    } else {
      go_to_top.style.opacity = 0;
      header.classList.remove('scrolled');
    }


    // Mobile nav

    let skillsY = skills.getBoundingClientRect().top + windowY - 50;
    let projectsY = projects.getBoundingClientRect().top + windowY - 50;
    let whoY = who.getBoundingClientRect().top + windowY - 50;
    let contactY = contact.getBoundingClientRect().top + windowY - 50;

    if(header_scroll < skillsY) {
      nav_skills.classList.remove('active');
      nav_projects.classList.remove('active');
      nav_who.classList.remove('active');
      nav_contact.classList.remove('active');
    } else if(header_scroll >= skillsY && header_scroll < projectsY) {
      nav_skills.classList.add('active');
      nav_projects.classList.remove('active');
      nav_who.classList.remove('active');
      nav_contact.classList.remove('active');
    } else if(header_scroll >= projectsY && header_scroll < whoY) {
      nav_skills.classList.remove('active');
      nav_projects.classList.add('active');
      nav_who.classList.remove('active');
      nav_contact.classList.remove('active');
    } else if(header_scroll >= whoY && header_scroll < contactY) {
      nav_skills.classList.remove('active');
      nav_projects.classList.remove('active');
      nav_who.classList.add('active');
      nav_contact.classList.remove('active');
    } else if(header_scroll >= contactY) {
      nav_skills.classList.remove('active');
      nav_projects.classList.remove('active');
      nav_who.classList.remove('active');
      nav_contact.classList.add('active');
    }
  }
  
  $(".scroll-animation").click(function(event) {
    event.preventDefault();
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
    header.classList.remove('scrolled');
  };
   
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