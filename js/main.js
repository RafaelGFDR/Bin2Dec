
function calcular() {
    var bienomal = document.getElementById('bienomal')
    var valor = document.getElementById('valor').value
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = parseInt(valor, 2);
    var ultimodigito = valor.charAt(valor.length - 1)
    if (valor == '') {
        resultado.innerHTML = ''
        }
        if (ultimodigito == 0 || ultimodigito == 1) {
            bienomal.innerHTML = 'Here is your decimal!'
        } else {
            resultado.innerHTML = '&#129335 Waiting for a valid binary number...'
        }
        if (ultimodigito >> 1 || ultimodigito >> 9999999) {
            bienomal.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        }
        if (ultimodigito == '') {
            bienomal.innerHTML = ''
        }
    }
