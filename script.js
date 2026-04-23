// pega o visor (input)
const visor = document.querySelector("#visor");

// pega todos os botões
const botoes = document.querySelectorAll("button");

// percorre cada botão
botoes.forEach(function(botao) {

    // quando clicar em um botão
    botao.addEventListener("click", function() {

        const valor = botao.textContent;

        // se clicar no C → limpa tudo
        if (valor === "C") {
            visor.value = "";

        // se clicar no = → calcula
        } else if (valor === "=") {
            visor.value = eval(visor.value);

        // qualquer outro botão → adiciona no visor
        } else {
            visor.value += valor;
        }

    });

});
