const navList = document.querySelector('.nav-list');
const menuIcon = document.querySelector('.menu-icon');

function setActiveLink(index) {
    // Get all list items in the navigation
    const listItems = document.querySelectorAll(".nav-links");

    // Remove the 'active' class from all list items, icons and nav-list
    listItems.forEach(function (item) {
        item.classList.remove("active");
        navList.classList.remove("active");
        menuIcon.classList.remove("active");
        document.body.classList.remove('menu-active');
    });

    // Add the 'active' class to the selected list item
    listItems[index].classList.add("active");
}

function toggleMenu() {
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('menu-active');
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
 });

 const year = document.getElementById('year');

 const currentYear = new Date().getFullYear();

 year.innerText = currentYear;
