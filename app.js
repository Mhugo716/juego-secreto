let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let  elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}  `);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{

        //El usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }

        intentos ++;

        limpiarCaja();

    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value ='';
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(listaNumeroSorteados)

     //si ya sorteamos todos los numeros
     if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
     }else{
     //si el numero esta incluido en la lista
     if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
     }else{
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //inidicar mensaje de intervalo de numero
    //inicializar el numero de intentos
    condicionesIniciales();
   
    //desabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();