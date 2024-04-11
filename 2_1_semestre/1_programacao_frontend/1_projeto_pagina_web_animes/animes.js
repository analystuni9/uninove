 // Função para ampliar a imagem ao clicar na miniatura
 document.addEventListener('DOMContentLoaded', function() {
    const miniaturas = document.querySelectorAll('.miniatura img');
    const imgExibir = document.getElementById('img');

    miniaturas.forEach(function(miniatura) {
        miniatura.addEventListener('click', function() {
            imgExibir.src = this.src;
        });
    });
});