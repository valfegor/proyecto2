
//obetengo por medio de queryselector todos los elementos en forma de array
let leer = document.querySelectorAll('.leer');
//por medio de un bucle for recorro todos los botones de la pagina
for(let i = 0 ; i<leer.length;i++){
    //obtengo todos los parrafos a los cuales quiero ocultar , tambien se manejan en forma de array
    let parrafos = document.querySelectorAll('.parrafo-post');
    //a cada boton despes de dar clic se ejecuta la funcion
    leer[i].onclick=function (e){
        e.preventDefault();
        //si parrafos en la posicion de i tiene el style=none , se muestra el parrafo
        //se añaden clases y se remueven clases
        if(parrafos[i].style.display==='none'){
            parrafos[i].style.display="block";
            leer[i].textContent="Ocultar";
            leer[i].classList.remove("mystyle");
        }//pero si si tiene el estilo block se oculta y cambia el texto del boton
        else{
            parrafos[i].style.display='none';
            leer[i].textContent="Mostrar";
            
            leer[i].classList.add("mystyle");
        }
    }
}

   