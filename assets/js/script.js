$(document).ready(function () {

    mostrarTodosJSON(); //se van a mostrar todos los pokemones

    $("#botonLimpiar").click(function (e) {
        e.preventDefault();

        limpiar();
    });

    $("#botonMostrarTodos").click(function (e) {
        e.preventDefault();

        limpiar();
        mostrarTodosJSON();
    });

});


function limpiar() {
    $("#pictures-container").empty();
}

function mostrarTodosJSON() {
    $.ajax({
        type: "GET",
        url: "assets/json/data.json",
        dataType: "json",
        async: true,
        success: function (data) {
            
            mostrarTodos(data);

        }


    });

}

function mostrarTodos(data) {
    
    for (let i = 0; i < data.pokemones.length; i++) {
        
        var pokemon = data.pokemones[i];
        crearCard(pokemon);

        
    }
}

function crearCard(pokemon) {
    
    let divCard = $("<div></div>")
    divCard.addClass("card");

    //colocando el nombre y el numero del pokemon 
    
    let nombre = $("<h3></h3>");
    nombre.append(pokemon.num + " " + pokemon.nombre);
    nombre.addClass("nombre");
    //colocando la imagen del pokemon

    let img = $("<img></img>");
    img.attr("src", pokemon.img);

    //colocando la info del pokemon

    let info = $("<p></p>");
    info.append(pokemon.info); //añadiendo la info del pokemón
    info.addClass("info");// asignándole una clase a la info
    divCard.append(nombre); //añadiendo los nombres de los pokemones
    divCard.append(img);//añadiendo las imagenes de los pokemones
    divCard.append(info);//añadiendo la info a las cards de los pokemones






    $("#pictures-container").append(divCard);
}