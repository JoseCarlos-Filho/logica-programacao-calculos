const {log} = console;
const elementoOpcoes = document.querySelectorAll(".container__radio-item input");
const elementoInfo = document.querySelector(".container__info");
const btnInicio = document.getElementById("inicio");

elementoOpcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {
        let id = opcao.value;
        if (id === "opcao-1") {
            mostraElemento(id);
        } else if (id === "opcao-2") {
            mostraElemento(id);
        } else if (id === "opcao-3") {
            mostraElemento(id);
        } else if (id === "opcao-4") {
            mostraElemento(id);
        } else if (id === "opcao-5") {
            mostraElemento(id);
        } else {
            elementoInfo.classList.remove("hidden");
        }
    })
});

function mostraElemento(id) {
    const opcoes = {
        "opcao-1" : document.querySelector("#calculo1"),
        "opcao-2" : document.querySelector("#calculo2"),
        "opcao-3" : document.querySelector("#calculo3"),
        "opcao-4" : document.querySelector("#calculo4"),
        "opcao-5" : document.querySelector("#calculo5")
    }
    
    for (let opcao in opcoes) {
        if (opcao === id) {
            opcoes[opcao].classList.remove("visibilidade");
            btnInicio.classList.remove("hidden");
        } else {
            opcoes[opcao].classList.add("visibilidade");
            elementoInfo.classList.add("hidden");
        }
    }
}

function inicio() {
    window.location.reload();
}

function limparCampos() {
    document.getElementById("distancia").value = '';
    document.getElementById("abastecimento").value = '';
    document.getElementById("preco-do-litro").value = '';
}

function calcularViagem() {
    let distancia = document.getElementById("distancia").value;
    let abastecimento = document.getElementById("abastecimento").value;
    let precoDoCombustivel = document.getElementById("preco-do-litro").value;
    let resultadoViagem = document.getElementById("resultado-viagem"); 

    if (distancia === '' || abastecimento === '' || precoDoCombustivel === '') {
        alert("Preencha todos os campos!");
        return;
    }

    let mediaDeConsumo = distancia / abastecimento;
    let custoPorKm = precoDoCombustivel / mediaDeConsumo;
    let custoCombustivel = abastecimento * precoDoCombustivel;

    resultadoViagem.innerHTML = `
        <p id="resultadoViagem" class="container__calculos-resultado">
            O consumo médio da sua viagem foi de: ${mediaDeConsumo.toFixed(2)} km/l.<br>
            O custo por quilômetro rodado foi de: R$ ${custoPorKm.toFixed(2)} reais.<br>
            O custo do combustível gasto na viagem foi de: R$ ${custoCombustivel.toFixed(2)} reais.
        </p>
    `

    limparCampos();
}

function calcularPalindroma() {
    let palavra = document.getElementById("palavra").value;
    let resultadoPalindroma = document.getElementById("resultado-palindroma");
    
    if (palavra === '') {
        alert("Preencha o campo!");
        return;
    }

    let uppercasePalavra = palavra.toUpperCase();

    let palavraInvertida = palavra.split('').reverse().join('').toUpperCase();

    if (uppercasePalavra !== palavraInvertida) {
        resultadoPalindroma.innerHTML = `
            <p id="resultadoPalindroma" class="container__calculos-resultado">
                A palavra "${palavra}" não é um palíndromo.
            </p>
        `
    } else {
        resultadoPalindroma.innerHTML = `
            <p id="resultadoPalindroma" class="container__calculos-resultado">
                A palavra "${palavra}" é um palíndromo.
            </p>
        `
    }

}