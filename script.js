const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    
    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
            // Opcional: mudar cor do botão ao clicar
            botao.style.backgroundColor = "#E31C25";
            botao.style.color = "#FFFFFF";
        } else {
            texto.textContent--;
            curtiu = false;
            // Opcional: voltar cor original
            botao.style.backgroundColor = "#FFFFFF";
            botao.style.color = "#183C63";
        }
    }
})
