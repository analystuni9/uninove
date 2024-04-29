

let visualizar = document.querySelector('.visualizar')
let texto = document.querySelector(".texto")
let texto_2 = document.querySelector(".texto_2")
// Seleciona o elemento HTML com a classe "btn-lermais" e armazena-o na variável btnlermais
let btnlermais = document.querySelector(".btn-lermais")
let btnlermais_2 = document.querySelector(".btn-lermais_2")

// Define uma função chamada "adicionartexto" para expandir/recolher o conteúdo de texto
let adicionartexto = () => {
    // Verifica se o elemento texto possui a classe "adicionar"
    if (texto.classList.contains("adicionar")) {
        // Remove a classe "adicionar" do elemento texto
        texto.classList.remove("adicionar")
        // Atualiza o texto do botão
        btnlermais.innerHTML = "Ler mais"
    } else {
        // Adiciona a classe "adicionar" ao elemento texto
        texto.classList.add("adicionar")
        // Atualiza o texto do botão
        btnlermais.innerHTML = "Ler menos"
    } 
}
// Adiciona um ouvinte de evento de clique ao elemento com a classe "btn-lermais" para chamar a função "adicionartexto"
btnlermais.addEventListener("click", adicionartexto)

let adicionartexto_2 = () => {
    if (texto_2.classList.contains("adicionar_2")) {
        texto_2.classList.remove("adicionar_2")
        btnlermais_2.innerHTML = "Ler mais"
    } else {
        texto_2.classList.add("adicionar_2")
        btnlermais_2.innerHTML = "Ler menos"
    }
}
btnlermais_2.addEventListener("click", adicionartexto_2)
