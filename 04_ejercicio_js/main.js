
let colores = ["blue", "red", "yellow", "green", "orange", "pink"];

$("document").ready(function(){
    $("#anuncio").text("¡Click! Para cambiar de color")
    .hide()
    .fadeIn(3000)
});

$("#anuncio").on("click", function(){
    let color = colores[Math.floor(Math.random() * colores.length)];
    $("#anuncio").css("background-color", color);
})

