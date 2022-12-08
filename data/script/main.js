$(document).ready(function() {
  setTimeout(function() {
    const body = document.getElementsByTagName('body')[0]
    body.classList.remove('loading')

    // const navbar = document.getElementById("navbar")
    const header = document.getElementById("header")
    const header_height = header.getBoundingClientRect().height
    const mobile_navbar = document.querySelector(".nav-mobile")
    const mobile_navbar_height = mobile_navbar.getBoundingClientRect().height

    const main = document.querySelector(".main .page")


    // mobile_navbar.style.top = window.pageYOffset + window.innerHeight - mobile_navbar_height + 'px'

    main.style.paddingBottom = mobile_navbar_height + 'px'

    const hamburger_menu = document.querySelector(".hamburger-menu")

    const container = document.querySelector(".screen-container")
    
    const click_to_select = document.querySelector(".screen-container .main .click-to-select")
  
    const skills = document.getElementById("skills")
    const projects = document.getElementById("projects")
    const who = document.getElementById("who")
    const contact = document.getElementById("contact")
    const contact_form = document.getElementById("contact-form")

    const desktop_nav_links = document.querySelectorAll(".nav-desktop .nav-link")

    const nav_skills = document.getElementById('nav-skills')
    const nav_projects = document.getElementById('nav-projects')
    const nav_who = document.getElementById('nav-who')
    const nav_contact = document.getElementById('nav-contact')

    const go_to_top = document.getElementById('go-to-top')
    const go_to_top_height = go_to_top.getBoundingClientRect().height

    go_to_top.style.top = window.pageYOffset + window.innerHeight - go_to_top_height - 30 + 'px'

    const mobile_navbar_progress = document.querySelector(".nav-mobile .progress-bar .progressed")
    
    window.onscroll = function() {
      const documentHeight_mobile = body.getBoundingClientRect().height - window.innerHeight
      let windowY = window.pageYOffset
      
      go_to_top.style.top = windowY + window.innerHeight - go_to_top_height - 30 + 'px'

      let contentY = document.getElementById("page-content").getBoundingClientRect().top + windowY
      let header_scroll = header_height + windowY
      header.style.top = windowY + "px"
      if (header_scroll >= contentY) {
        header.classList.add('scrolled')
        go_to_top.style.opacity = 1
      } else {
        go_to_top.style.opacity = 0
        header.classList.remove('scrolled')
      }


      // Mobile nav

      let skillsY = skills.getBoundingClientRect().top + windowY
      let projectsY = projects.getBoundingClientRect().top + windowY
      let whoY = who.getBoundingClientRect().top + windowY
      let contactY = contact.getBoundingClientRect().top + windowY

      let custom_header_scroll = header_scroll + 50

      if(custom_header_scroll < skillsY) {
        nav_skills.classList.remove('active')
        nav_projects.classList.remove('active')
        nav_who.classList.remove('active')
        nav_contact.classList.remove('active')
      } else if(custom_header_scroll >= skillsY && custom_header_scroll < projectsY) {
        nav_skills.classList.add('active')
        nav_projects.classList.remove('active')
        nav_who.classList.remove('active')
        nav_contact.classList.remove('active')
      } else if(custom_header_scroll >= projectsY && custom_header_scroll < whoY) {
        nav_skills.classList.remove('active')
        nav_projects.classList.add('active')
        nav_who.classList.remove('active')
        nav_contact.classList.remove('active')
      } else if(custom_header_scroll >= whoY && custom_header_scroll < contactY) {
        nav_skills.classList.remove('active')
        nav_projects.classList.remove('active')
        nav_who.classList.add('active')
        nav_contact.classList.remove('active')
      } else if(custom_header_scroll >= contactY) {
        nav_skills.classList.remove('active')
        nav_projects.classList.remove('active')
        nav_who.classList.remove('active')
        nav_contact.classList.add('active')
      }



      // Progress bar - mobile nav bar

      if(header_scroll < skillsY) {
        mobile_navbar_progress.style.width = 0
      } else if(header_scroll >= skillsY && header_scroll < projectsY) {
        mobile_navbar_progress.style.width = (-skills.getBoundingClientRect().top * 25) / skills.getBoundingClientRect().height + "%"
      } else if(header_scroll >= projectsY && header_scroll < whoY) {
        mobile_navbar_progress.style.width = 25 + (-projects.getBoundingClientRect().top * 25) / projects.getBoundingClientRect().height + "%"
      } else if(header_scroll >= whoY && header_scroll < contactY) {
        mobile_navbar_progress.style.width = 50 + (-who.getBoundingClientRect().top  * 25) / who.getBoundingClientRect().height + "%"
      } else if(header_scroll >= contactY) {
        mobile_navbar_progress.style.width = 75 + (-contact.getBoundingClientRect().top * 25) / (documentHeight_mobile - (contact.getBoundingClientRect().top + windowY)) + "%"
      }
    }
    
    $(".scroll-animation").click(function(event) {
      event.preventDefault()
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - header_height
      }, 1000)
    })

    $(".scroll-to-top").click(function(event) {
      event.preventDefault()
      scrollToTop()
    })

    function scrollToTop() {
      $("html, body").animate({
        scrollTop: $("body").offset().top - header_height
      }, 1000)
      header.classList.remove('scrolled')
      container.classList.remove("active")
    }
    
    hamburger_menu.addEventListener("click", () => {
      container.classList.toggle("active")

      click_to_select.addEventListener("click", () => {
        container.classList.remove("active")
      })

      click_to_select.style.height = main.getBoundingClientRect().height + 'px'

      desktop_nav_links.forEach(nav_link => {
        nav_link.addEventListener("click", () => {
          container.classList.remove("active")
          event.preventDefault()
          window.scroll({
            top: (eval(nav_link.getAttribute('href').replace('#', '') + '_top') - header_height) + 5,
            behavior: 'smooth',
          })
        })
      })
      
    })
  }, 2500)
})