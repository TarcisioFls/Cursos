    var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var peso = document.querySelector("#primeiro").querySelector(".info-peso").textContent;

//var altura = document.querySelector("#primeiro").querySelector(".info-altura").textContent;

//var imc = peso / (altura * altura);

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    
    var imc = peso / (altura * altura);
    
    var alturaValida = true;
    var pesoValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso invalído!");
        pesoValido = false;
        pacientes[i].querySelector(".info-imc").textContent = "Peso invalído!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura invalída!");
        alturaValida = false;
        pacientes[i].querySelector(".info-imc").textContent = "Altura invalída!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        pacientes[i].querySelector(".info-imc").textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente").addEventListener("click", function(e) {
    e.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;
    var altura = form.altura.value;
    
    var tr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    tr.appendChild(nomeTd);
    tr.appendChild(pesoTd);
    tr.appendChild(alturaTd);
    tr.appendChild(gorduraTd);
    
    var tabela = document.querySelector("#tabela-pacientes").appendChild(tr);
    
});