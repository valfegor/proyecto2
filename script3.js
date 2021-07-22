p1 = document.getElementById('p1');
boton = document.getElementById('boton');
let a = 1 ;
p1.style.display ="none"

boton.onclick = function (){
    myfunction();
}


function myfunction(){
    if(p1.style.display === "none"){
        p1.style.display="block";
        boton.textContent="Ocultar";
    }
    else{
        p1.style.display = "none";
        boton.textContent="Mostrar";
    }
}