
let inputAltura = document.querySelector('#altura');
let inputPeso = document.querySelector('#peso');
let remove = document.querySelector('.hidden');
let calcular = document.querySelector('.botão-calcular'); // Seleciona o botão de calcular
let limpar = document.querySelector('.botão-limpar'); // Seleciona o botão de limpar

// Adiciona event listener para o botão de calcular
calcular.addEventListener('click', calculoImc);

// Adiciona event listener para o botão de limpar
limpar.addEventListener('click', resetar);

function calculoImc() {
    let altura = parseFloat(inputAltura.value); // Obtém o valor do campo altura
    let peso = parseFloat(inputPeso.value); // Obtém o valor do campo peso

    remove.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar o resultado

    // Verifica se os valores de altura e peso são válidos
    if (isNaN(altura) || isNaN(peso)) {
        inputAltura.value = ""; // Limpa o campo altura
        inputPeso.value = ""; // Limpa o campo peso
        let texto = document.querySelector('.resultado');
        texto.innerHTML = 'Valores inválidos, digite novamente';
        return; // Sai da função se os valores forem inválidos
    }

    // Calcula o IMC
    const resultado = peso / (altura ** 2);

    // Determina a mensagem com base no resultado do IMC
    if (resultado < 18.5) {
        mostrarResultado(`IMC ${resultado.toFixed(2)} - Cuidado, você está abaixo do peso!`);
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        mostrarResultado(`IMC ${resultado.toFixed(2)} - Parabéns, seu peso é normal!`);
    } else {
        mostrarResultado(`IMC ${resultado.toFixed(2)} - Você está acima do peso!`);
    }
}

function resetar() {
    inputAltura.value = ""; // Limpa o campo altura
    inputPeso.value = ""; // Limpa o campo peso
    remove.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder o resultado
}

function mostrarResultado(mensagem) {
    let textoResultado = document.querySelector('.resultado');
    textoResultado.innerHTML = mensagem; // Define o conteúdo HTML com a mensagem
}
