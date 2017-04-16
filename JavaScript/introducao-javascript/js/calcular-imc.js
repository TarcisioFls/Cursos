    var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var peso = document.querySelector("#primeiro").querySelector(".info-peso").textContent;

//var altura = document.querySelector("#primeiro").querySelector(".info-altura").textContent;

//var imc = peso / (altura * altura);

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    
    var imc = calcularImc(peso, altura);
    
    var alturaValida = true;
    var pesoValido = true;
    
    if (!validaPeso(peso)) {
        console.log("Peso invalído!");
        pesoValido = false;
        pacientes[i].querySelector(".info-imc").textContent = "Peso invalído!";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if (!validaAltura(altura)) {
        console.log("Altura invalída!");
        alturaValida = false;
        pacientes[i].querySelector(".info-imc").textContent = "Altura invalída!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        pacientes[i].querySelector(".info-imc").textContent = imc;
    }
}

function calcularImc (peso, altura) {
    var imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}

function validaPeso (peso) {
    if (peso <= 0 || peso >= 1000) {    
        return false   
    }
    return true;
}

function validaAltura (altura) {
    if (altura <= 0 || altura >= 3.00) {
        return false;    
    }
    return true;
}