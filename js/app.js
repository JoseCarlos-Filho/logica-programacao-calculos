const {log} = console;
const elementoOpcoes = document.querySelectorAll(".container__radio-item input");

elementoOpcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {
        let id = opcao.value;
        if (id === "opcao-1") {
            mostraElemento(id);
            
        } else if (id === "opcao-2") {
            mostraElemento(id);
        }
    })
});

function mostraElemento(id) {
    log(document.querySelector(".container__calculos"));
    const opcoes = {
        "opcao-1" : document.querySelector("#calculo1"),
        "opcao-2" : document.querySelector("#calculo2")
    }
    
    for (let opcao in opcoes) {
        if (opcao === id) {
            opcoes[opcao].classList.remove("visibilidade");
        } else {
            opcoes[opcao].classList.add("visibilidade");
        }
    }
}
