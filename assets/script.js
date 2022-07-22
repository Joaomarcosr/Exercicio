const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.hide-menu')

menuToggle.addEventListener('click', ()=> {
    //menu.style.display = 'none'
    if(menu.classList.contains('hide-menu')){
        menu.classList.remove('hide-menu')
        menu.classList.add('show-menu')
    } else {
        menu.classList.add('hide-menu')
        menu.classList.remove('show-menu')
    }
})