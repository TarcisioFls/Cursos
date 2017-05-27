var quantFrase =$(".frase").text().split(" ").length;

$("#quant").text(quantFrase);

var campo = $(".campo-digitacao");

campo.on("input", function() {
    
    var qtdcaracteres = campo.val().length;
    $("#contador-caracteres").text(qtdcaracteres);
    
    var qtdPalavras = campo.val().split(/\s+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    
});