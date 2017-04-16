var botaoAdicionar = document.querySelector("#adicionar-paciente").addEventListener("click", function(e) {
    e.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtendoPaciente(form);
    var tr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes").appendChild(tr);
    
    form.reset();
});

function obtendoPaciente(form) {
    var paciente = {
        nome    : form.nome.value,
        peso    : form.peso.value,
        gordura : form.gordura.value,
        altura  : form.altura.value,
        imc     : calcularImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    
    return td;
}

function montaTr (paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}