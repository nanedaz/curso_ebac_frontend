
const formulario = document.getElementById('meuForm');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        resultado.textContent = `Oba! ${valorB} é maior do que o ${valorA}.`
    } else {
        resultado.textContent = `Poxa, ${valorB} não é maior do que o ${valorA}.`;
    }
});