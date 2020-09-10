let miImage = document.querySelector('img');
miImage.onclick = function  (){
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/logo-acusticos.jpg'){
        miImage.setAttribute('src','images/fondo.jpg');
    }
    else{
        miImage.setAttribute('src','images/logo-acusticos.jpg');
    }
}
let myButton = document.querySelector('button');
let myTitle = document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    myTitle.textContent = 'Bienvenido a la pagina de Acusticos Nacionales, '+ miNombre;
}

if(!localStorage.getItem('nombre')){
    estableceNombreUsuario();
}
else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    myTitle.textContent = 'Bienvenido a la pagina de Acusticos Nacionales, '+ nombreAlmacenado;
}
myButton.onclick = function(){
    estableceNombreUsuario();
}