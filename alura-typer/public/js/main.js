var quantFrase =$(".frase").text().split(" ").length;

$("#quant").text(quantFrase);

var campo = $(".campo-digitacao");

campo.on("input", function() {
    
    var qtdcaracteres = campo.val().length;
    $("#contador-caracteres").text(qtdcaracteres);
    
    var qtdPalavras = campo.val().split(/\s+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    
});

var tempoRestante = $("#tempo").text();
campo.one("focus", function() {
    var idTempo = setInterval(function(){
        tempoRestante--;
        $("#tempo").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(idTempo);
        }
    }, 1000);
});