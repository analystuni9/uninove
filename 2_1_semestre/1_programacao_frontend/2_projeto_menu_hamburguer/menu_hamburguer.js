let icon = document.querySelector('.icon')
let navMenu = document.querySelector('.nav-menu')
function alternar(){
    if(icon.classList.contains('icon')){
        icon.classList.remove('icon')
        icon.classList.add('animationX')
        navMenu.classList.add('exibir')
    }else {
        icon.classList.remove('animationX')
        icon.classList.add('icon')
        navMenu.classList.remove('exibir')
    }
}
icon.addEventListener('click', alternar)