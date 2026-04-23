const visor = document.querySelector("#visor");
const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {

        const valor = botao.textContent;

        if (valor === "C") {
            visor.value = "";

        } else if (valor === "⌫") {
            visor.value = visor.value.slice(0, -1);

        } else if (valor === "=") {
            try {
                let conta = visor.value;

                conta = conta.replace(/÷/g, "/");
                conta = conta.replace(/×/g, "*");
                conta = conta.replace(/%/g, "/100");

                visor.value = eval(conta);
            } catch {
                visor.value = "Erro";
            }

        } else {
            visor.value += valor;
        }

    });
});
