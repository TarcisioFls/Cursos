var botaoAdiciona = document.querySelector("#busca-paciente");

botaoAdiciona.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes222");
    
    xhr.addEventListener("load", function (){
        var erroJson = document.querySelector("#erro-ajax");
        
        if (xhr.status == 200) {
        
            var response =  xhr.responseText;
            var pacientes = JSON.parse(response);
            erroJson.classList.add("invisivel");
            pacientes.forEach(function(paciente){
                var tr =  montaTr(paciente);
                document.querySelector("#tabela-pacientes").appendChild(tr);
            });
        } else {
            erroJson.classList.remove("invisivel");
        }
    });
    
    xhr.send();
});