let numerosecreto = 0;
let intentos = 0;
let numerossorteados = [];
let numeromaximo = 10;

function asignartextoelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
}

function verificarnumero() {
    let numerousuario = parseInt(document.getElementById('valorusuario').value);

    if (numerousuario === numerosecreto) {
        asignartextoelemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numerousuario > numerosecreto) {
            asignartextoelemento('p','El número secreto es menor');
        } else {
            asignartextoelemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }

    return;
}

function limpiarcaja() {
    let valorcaja = document.querySelector('#valorusuario');
    valorcaja.value = '';
}

function numeroaleatorio() {
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;

    console.log(numerogenerado);
    console.log(numerossorteados);

    if (numerossorteados.length == numeromaximo) {
        asignartextoelemento('p','Ya se sortearon todos los números posibles');
    } else {
        if (numerossorteados.includes(numerogenerado)) {
            return numeroaleatorio();
        } else {
            numerossorteados.push(numerogenerado);
            return numerogenerado;
        }
    }
}

function condicionesiniciales() {
    asignartextoelemento('h1', 'Juego del número secreto');
    asignartextoelemento('p',`Indica un número del 1 al ${numeromaximo}`);
    numerosecreto = numeroaleatorio();
    intentos = 1;

}

function reiniciarjuego() {
    //limpiar la caja 
    limpiarcaja();
    // Condiciones iniciales: indicar mensaje inicio, generar número aleatorio,
    // Deshabilitar el número de intentos e inicializar el número de intentos
    condicionesiniciales();
    // Deshabilitar el botón
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesiniciales();


