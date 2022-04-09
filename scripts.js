let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

// Validar si un numero es positivo
const ValidationNumber = (n1, n2) => {
    if (n1 > 0  && n2 > 0 && n1 % 1 === 0 && n2 % 1 === 0) {
        return false
    } else {
        return true
    }
}

// Validacion si dos numeros son iguales
const ValidationNumberEqual = (n1, n2) => {
    if (n1 === n2) {
        alert(`Los numeros ${n1} y ${n2} son iguales`)
    } else {
        alert(`Los numeros ${n1} y ${n2} no son iguales`)
    }
}

const sum = (n1, n2) => {
    let result = (parseInt(n1) + parseInt(n2))
    alert(`La suma entre ${n1} y ${n2} es ${result}`)
}

const exchange = (n1, n2) => {
    nu1 = n1
    nu2 = n2
    aux = nu1

    // Intercambio de valores ingresados
    nu1 = nu2
    nu2 = aux
    
    alert(`El primer numero ${n1} ahora es ${nu1} y el segundo numero ${n2} ahora es ${nu2}, dale aceptar para ver el cambio de los inputs`)
    
    // Cambio en los inputs al momento de hacer el cambio
    num1.value = nu1
    num2.value = nu2
}

const numberMinor = (n1, n2) => {
    // Se utiliza la funcion de Math en el cual contiene un metodo estatico min() nos ayuda a encontrar el menor de dos o mas numero ingresados como parametros
    let result = Math.min(n1, n2);
    alert(`El numero menor entre ${n1} y ${n2} es ${result}`)
}


const options = (value) => {
    if (ValidationNumber(num1.value, num2.value)) {
        alert(`Solo puedes ingresar numeros positivos`)
    } else {
        switch (value) {
            case 'menor':
                numberMinor(num1.value, num2.value)
                console.log('entre a menor');
                break;
            case 'igual':
                ValidationNumberEqual(num1.value, num2.value)
                console.log('entre a igual');
                break;
            case 'intercambio':
                exchange(num1.value, num2.value)
                console.log('entre a intercambio');
                break;
            case 'sumar':
                sum(num1.value, num2.value)
                console.log('entre a sumar');
                break;
                    
            default:
                break;
        }
    }
}
