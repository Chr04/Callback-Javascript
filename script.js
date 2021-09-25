function criaBotao(text, callback) {
    const body = document.querySelector("body");
    const botao = document.createElement("button");

    callback(botao);

    body.insertAdjacentElement("beforeend", botao);
    botao.textContent = text;
}

criaBotao("Entrar", (botao) => {
    botao.style.cssText = `
        font-size: 20px;
        color: purple;
        padding: 30px;
    `;
});

criaBotao("Sair", (botao) => {
    botao.style.cssText = `
        color: tomato;
        padding: 60px;
        border-radius: 20px;
        margin-left: 30px;
    `;
})
