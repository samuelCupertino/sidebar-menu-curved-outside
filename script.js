const initNavBar = () => {
    const menusEl = document.querySelectorAll('.side-bar ul li')
    menusEl.forEach(menu => menu.addEventListener('click', ()=> {
        const menuActiveEl = document.querySelector('.side-bar ul li.active')
        menuActiveEl.classList.remove('active')
        menu.classList.add('active')
    }))
}
initNavBar()    