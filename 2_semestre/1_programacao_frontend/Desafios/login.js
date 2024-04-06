let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
let x = document.querySelector('.content')
let y = document.querySelector('.mostrar')
function verificar(){
    if (username == 'admin' && password == 'admin123') {
        window.location.href = 'restrito.html'
    } else {
        window.alert('Acesso Negado')
    }
} 
function exibir() {
    x.innerHTML = 'texto 1'
}
function alternar () {
    if (x.style.display == 'none') {
        x.style.display = 'block'
        y.textContent = 'ocultar'
    } else {
        x.style.display = 'none'
        y.textContent = 'mostrar'
    }
}