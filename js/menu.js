let menu__list,
    menu = document.querySelector(".menu");

menu.addEventListener('click', (e) => {
    e.preventDefault();
    
    menu__list = e.path[1].childNodes[3];
    if (menu__list !== undefined) menu__list.classList.toggle('active');
});