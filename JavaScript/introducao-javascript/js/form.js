var botaoAdicionar = document.querySelector("#adicionar-paciente").addEventListener("click", function(e) {
    e.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtendoPaciente(form);
    var tr = montaTr(paciente);
    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        
        return;
    }
    var tabela = document.querySelector("#tabela-pacientes").appendChild(tr);
    
    form.reset();
    document.querySelector("#mensagens-erro").innerHTML = "";
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

function validaPaciente (paciente) {
    var erros = [];
    
    if (paciente.nome.length < 1) {
        erros.push("O Campo Nome é Obrigatório");
    }
    
    if (paciente.peso.length < 1) {
        erros.push("O Campo Peso é Obrigatório");
    } else if (!validaPeso(paciente.peso)) {
        erros.push("Peso Inválido");               
    }
    
    if (paciente.altura.length < 1) {
        erros.push("O Campo Altura é Obrigatório");
    } else if (!validaAltura(paciente.altura)) {
        erros.push("Altura Inválida")
    }
        
    if (paciente.gordura.length < 1) {
        erros.push("O Campo Gordura é Obrigatório");
    }
    
    return erros;
}

function exibeMensagensDeErro (erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    
}