$("#cerrar").on("click", function(){
    $("#banner").remove();
});

$("img").on("click", function(){
    $(this).replaceWith("<div class=\"texto\">Agregado al texto</div>");
});