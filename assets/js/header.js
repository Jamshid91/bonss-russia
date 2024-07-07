const searchBtn = document.querySelector('.search-btn'),
      searchMob = document.querySelector('.search-btn_mob'),
      body = document.querySelector('body'),
      navList = document.querySelector('.nav_l'),
      navListMob = document.querySelector('.nav_m .arrow'),
      menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      nav = document.querySelector('.header-base');


searchBtn.addEventListener('click', () => {
    searchBtn.parentElement.classList.toggle('show-search')
});

searchMob.addEventListener('click', () => {
    searchMob.parentElement.classList.toggle('serchClick');
    body.classList.toggle('bodyStopScroll');
    menuBtn.classList.remove('menuClick');
    menu.classList.remove('menuShow');
});

document.addEventListener('click', (e) => {
    searchBtn.parentElement.contains(e.target)|| searchBtn.parentElement.classList.remove('show-search')
});

let base = navList.parentElement.parentElement.parentElement.parentElement.parentElement 

navList.addEventListener('mouseover', () => {
    base.classList.add('showCatalog')
});

navListMob.addEventListener('click', () => {
    navListMob.parentElement.parentElement.classList.toggle('showCg')
})

base.addEventListener('mouseout', () => {
    base.classList.remove('showCatalog')
});


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menuClick');
    menu.classList.toggle('menuShow');
    body.classList.toggle('bodyStopScroll');
    searchMob.parentElement.classList.remove('serchClick');
});





