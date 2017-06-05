$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria).fail(function() {
        $("#erro").toggle();
        setTimeout(function (){
        $("#erro").toggle(); 
        }, 1500);
    }).always(function(){
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var tempo = $("#tempo");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

$("#botao-frase-id").click(buscaFrase);
function buscaFrase() {
    console.log(1);
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var dados = {id: fraseId};
    $.get("http://localhost:3000/frases", dados, trocaFrase).fail(function() {
        $("#erro").toggle();
        setTimeout(function() {
           $("#erro").toggle(); 
        },2000);
    }).always(function() {
        $("#spinner").toggle();
    });
}

function trocaFrase(data) {
    console.log(2);
    
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}