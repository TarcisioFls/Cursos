var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/produtos", function(request, response) {

   
   console.log("Atendendo a requisição"); response.render("produtos/lista");
    console.log("Listando...");
});


app.listen(3000, function() {
    console.log("Servidor Rodando");
});