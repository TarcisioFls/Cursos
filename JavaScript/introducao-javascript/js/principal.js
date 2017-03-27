var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var peso = document.querySelector("#primeiro").querySelector(".info-peso").textContent;

var altura = document.querySelector("#primeiro").querySelector(".info-altura").textContent;

var imc = peso / (altura * altura);

var alturaValida = true;
var pesoValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso invalído!");
    pesoValido = false;
    document.querySelector("#primeiro").querySelector(".info-imc").textContent = "Peso invalído!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura invalída!");
    alturaValida = false;
    document.querySelector("#primeiro").querySelector(".info-imc").textContent = "Altura invalída!";
}

if (pesoValido && alturaValida) {
    document.querySelector("#primeiro").querySelector(".info-imc").textContent = imc;
}