/*
===============================================
Código JavaScript para nuestra página web
===============================================
*/

/////////////////////////////////////////

/*Seleccionamos el boton de llamada a la acción para poder trabajar con él.
Este boton tiene id="CTA-button"*/
let boton = document.getElementById("CTA-button");

/*Mediante el método alert damos aviso al usuario de que la parte correspondiente a comprar un auto aun falta hacerse*/
boton.addEventListener("click", () => alert("Sección del sitio en construcción"));

/////////////////////////////////////////

/*En esta parte haremos que las tarjetas cambien de color cuando el mouse se posa sobre cada una*/

//1°. Seleccionamos todas las tarjetas que tengan la clase "card" mediente el método querySelectorAll.
const tarjetasAutos = document.querySelectorAll('.card');

//2°. Recorremos cada tarjeta para asignarle los eventos correspondiente: mouseenter y mouseleave
tarjetasAutos.forEach(tarjeta => {

    /* mouseenter: es un evento que ocurre cuando el curso del mouse ingresa a una tarjeta*/
    tarjeta.addEventListener('mouseenter', () => {
        
        //Aca cambiamos el color de fondo a cada tarjeta
        tarjeta.style.backgroundColor = 'rgb(238, 238, 228)';
    });

    /*mouseleave: es un evento que ocurre cuando el cursor del mouse abandona una tarjeta*/
    tarjeta.addEventListener('mouseleave', () => {
        /*La razón de asignar un string vacio es para que la tarjeta a la cual ingresamos con el mouse
        recupere su estilo CSS original*/
        tarjeta.style.backgroundColor = '';
    });
});

