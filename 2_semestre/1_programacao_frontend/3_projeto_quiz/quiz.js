function corrigir() {
    var pontos = 0;
    var mensagem;
    if (document.prova.q1.value == "a") {
        pontos += 3;
    }
    if (document.prova.q2.value == "a") {
        pontos += 3;
    }
    if (document.prova.q3.value == "a") {
        pontos += 4;
    }
    if (pontos <= 6) {
        mensagem = "Você foi reprovado"
    } else {
        mensagem = " Você foi aprovado"
    }
    exibir.innerHTML = `${mensagem}! Sua foi ${pontos}.`
    alert('Você tirou nota ' + pontos);
}