var campo = $(".campo-digitacao");
var frase = $(".frase").text();
var quantFrase = frase.split(" ").length;
var tempoInicial = $("#tempo").text();
var tempoRestante = tempoInicial;
var disabled = $("#botao-reiniciar").hasClass("disabled");

$(function() {
    inicializarContadores();
    inicializaContatorTempo();
    verificandoTextoDigitado();
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
            if (tempoRestante <= tempoInicial && tempoRestante > 0) {
                tempoRestante--;
            }
            $("#tempo").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(idTempo);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    $("#botao-reiniciar").removeClass("disabled");
    campo.addClass("campo-desativado");
    $("#botao-reiniciar").click(reiniciarJogo);
    inserirNome();
}

function reiniciarJogo() {
    $("#contador-palavras").text(0);
    $("#tempo").text(tempoInicial);
    tempoRestante = tempoInicial;
    $("#contador-caracteres").text(0);
    campo.attr("disabled", false);
    campo.val("");
    $("#botao-reiniciar").addClass("disabled");
    campo.removeClass("campo-desativado");
    campo.removeClass("borda-errada");
    campo.removeClass("borda-correta");
    $("#botao-reiniciar").off("click");
    inicializaContatorTempo();
}

function verificandoTextoDigitado() {
    campo.on("input", function() {
        var campoDigitado = campo.val();
        var textoComprado = frase.substr(0, campoDigitado.length);
        if (textoComprado == campoDigitado) {
            campo.addClass("borda-correta");
            campo.removeClass("borda-errada");
        } else {
            campo.addClass("borda-errada");
            campo.removeClass("borda-correta");
        } 
    });
}