$("#botao-placar").click(exbirTabela);

function inseriNoPlacar(nome) {
    var tbody = $(".placar").find("tbody");
    var quantPalavras = $("#contador-palavras").text();
    var linha = criarLinha(nome, quantPalavras);
    
    linha.find(".remover").click(removerLinha);
    
    tbody.prepend(linha);
    
    $(".placar").stop().slideDown(1000);
    scrollTabela();
}

function criarLinha(nome, palavra) {
    var tr = $("<tr>");
    var tdNome = $("<td>").text(nome);
    var tdPalavra = $("<td>").text(palavra);
    var tdRemover = $("<td>");
    var a = $("<a>").attr("href", "#").addClass("remover");
    var i = $("<i>").addClass("small").addClass("material-icons").text("delete");
    
    a.append(i);
    tdRemover.append(a);
    tr.append(tdNome).append(tdPalavra).append(tdRemover);
    
    return tr;
}

function inserirNome() {
    var nome = prompt("Digite seu nome para a tabela de pontuação");
    inseriNoPlacar(nome);
}

function removerLinha(e) {
    e.preventDefault();
    
    $(this).parent().parent().fadeOut(800, function() {
        $(this).remove();
    });
} 

function exbirTabela() {
    $(".placar").stop().slideToggle(1000);
    scrollTabela();
}

function scrollTabela() {
    var posicaoPlacar = $(".placar").offset().top;
    $("body").animate({
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}