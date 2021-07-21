const bienvenida = document.getElementById('bienvenida');

function actualizarNombre(){
    let name = prompt("Por favor Introduzca su nombre");
    bienvenida.textContent = "Bienvenido: " +"" +name;
}

actualizarNombre();


var contador = 1 ;


//funcion de tiempo

setInterval(function(){
    //se obtiene el elemento radio
    document.getElementById('radio' + contador).checked = true;
    //contador vamos a ir incrementando
    contador ++;
    //si contador es mayor a la cantidad de imagenes.
    //contador se restablece a 1.
    if(contador>6){
        contador = 1;
    }
    //tiempo de las imagenes
},5000);