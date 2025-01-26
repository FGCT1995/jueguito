let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados =[];
let numeroMaximo = 10;
let intentosMaximos =3;

condicionesIniciales();


function asignarTextoElemento(elemento,texto){
    let textoHTML = document.querySelector(elemento);
    textoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);

    if(intentos > intentosMaximos && numeroDeUsuario != numeroSecreto){
      asignarTextoElemento('p','Se alcanzaron los maximos intentos');
      document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
      
      if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento("p",`Encontraste el numero secreto en ${intentos} ${intentos === 1? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","el numero es menor");
        }else{
            asignarTextoElemento("p","el numero es mayor");
        }
        intentos++;            
    }
    vaciarCaja();
    return;

    }
    
    
}


function vaciarCaja() {
    document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
 
    if (listaNumeroSorteados.length === numeroMaximo){
      asignarTextoElemento('p','Se han sorteados todos los numeros');

    }else{

      if(listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

      }else{
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
  }

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero Secreto");
    asignarTextoElemento("p",`escoge un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto(numeroMaximo);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    vaciarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}