var campo = $(".campo-digitacao");
var quantFrase =$(".frase").text().split(" ").length;
var tempoRestante = $("#tempo").text();
var tempoInicial = $("#tempo").text();

$(function() {
    inicializarContadores();
    inicializaContatorTempo();
    $("#botao-reiniciar").click(reiniciarJogo)    
});


$("#quant").text(quantFrase);

function inicializarContadores() {
    campo.on("input", function() {
    
    var qtdcaracteres = campo.val().length;
    $("#contador-caracteres").text(qtdcaracteres);
    
    var qtdPalavras = campo.val().split(/\s+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    
});
}

function inicializaContatorTempo() {
    campo.one("focus", function() {
    idTempo = setInterval(function(){
        tempoRestante--;
        $("#tempo").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(idTempo);
            $("#botao-reiniciar").attr("disabled", false);
        }
    }, 1000);
});
}

function reiniciarJogo() {
    $("#contador-palavras").text(0);
    $("#tempo").text(3);
    tempoRestante = 3;
    $("#contador-caracteres").text(0);
    campo.attr("disabled", false);
    campo.val("");
    $("#botao-reiniciar").attr("disabled", true);
    inicializaContatorTempo();
}