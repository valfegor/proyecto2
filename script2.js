let boton = document.getElementById('boton');
let tabla = document.getElementById('table');
let boton2 = document.getElementById('boton2');

//en este array se guardan los datos que contienen los campos de texto
let allDatos = [];

//de esta manera guardo lo que tengo en este array a local
//si en el localstorage no e igual a null realice el proceso
if(localStorage.getItem("frm")!=null){
    //almaceno el array de allDatos los dato de local storage.
    allDatos=JSON.parse(localStorage.getItem("frm"));
    mostrar();
}

boton.onclick = function(){
    guardarDatos();
}

boton2.onclick = function(){
   mostrar();
}

function guardarDatos(){
    //cuando se de clic a guardar se debe validar.

    validar();
    //se inicia un array.
    //Array en donde se van a guardar los datos.
    //esto guarda solamente un registro , voy a guardarlo
    datos = [];

    //ingreso los datos al arreglo.

    datos.push(document.getElementById("nombre").value);
    datos.push(document.getElementById("cedula").value);
    datos.push(document.getElementById("email").value);
    datos.push(document.getElementById("telefono").value);
    //todos los datos almacenados en el array lo guardo en datos
    allDatos.push(datos);

    //transformo los datos en un JSON.

    //el arreglo transformado en un JSON es lo que voy a guardar
    arjson = JSON.stringify(allDatos);
    //almaceno los datos en el localstorage.

    localStorage.setItem("frm",arjson);

    console.log(datos);
    console.log(allDatos);

    //luego de que se guardo.

    borrarcampos();
}


function mostrar(){
    campos = JSON.parse(localStorage.getItem("frm"));
    //creo un ciclo para recorrer el arreglo de datos.
    for(x=0;x<campos.length;x++){
       $(tabla).append("<tr><td>"+campos[x][0]+"</td><td>"+campos[x][1]+"</td><td>"+campos[x][2]+"</td></tr>");
    }

}


function validar(){

    //campos del formulario
    let nombre = document.getElementById('nombre').value;
    let cedula = document.getElementById('cedula').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;


    if(nombre.length<2){
        alert("mijo revie");
        return false;
    }

    if(cedula.length<2){
        alert("mijo revie");
        return false;
    }

    if(email.length<2){
        alert("mijo revie");
        return false;
    }

    if(telefono.length<2){
        alert("mijo revie");
        return false;
    }

}

function borrarcampos(){
    let nombre = document.getElementById('nombre');
    nombre.value("");
    let cedula = document.getElementById('cedula');
    cedula.value("");
    let email = document.getElementById('email');
    email.value("");
    let telefono = document.getElementById('telefono')
    telefono.value("");
}