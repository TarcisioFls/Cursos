$("#botao-placar").click(exbirTabela);
$("#botao-sincronizacao").click(sincronizarTabela);

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

function atualizarPlacar() {
    $.get("http://localhost:3000/placar", function(data) {
        $(data).each(function() {
            var linhas = criarLinha(this.usuario, this.pontos);
            linhas.find(".remover").click(removerLinha);
            $("tbody").append(linhas);
        });
    });
}

function sincronizarTabela() {
    var placar = [];
    var linhas = $("tbody>tr");
    
    linhas.each(function() {
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();
        
        var score = {
            usuario: usuario,
            pontos: palavras
        };
        
        placar.push(score);
    });
    
    var dados = {
        placar: placar
    };
    
    $.post("http://localhost:3000/placarss", dados, function() {
        
        console.log("Placar sincronizado com sucesso!");
        $(".tooltip").tooltipster("open");
        
    }).fail(function() {
        
        $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar");
        
    }).always(function() {
        
        setTimeout(function() {
            $(".tooltip").tooltipster("close");
        }, 1200);
        
    });
}