/// funcion1 recolecion de datos --------------------------------------------------------------------
function recoletardatos() {
    let tipolavadora = Number(prompt('selecione el tipo de lavadora que desea utilizar tipo 1 o 2'))
    let numlavadoras = Number(prompt('digite la cantidad de lavadoras alquiladas'))
    let horas = Number(prompt('digite la cantidad de horas de alquiler '))

    return {tipolavadora, numlavadoras, horas}
}
/// funcion2 para calcular el costo 
function calcularprecio(tipolavadora, precioPorHora, horas) {
    const lav1 = 4000
    const lav2 = 3000

    let precioporhora;

    if(tipolavadora === 1){
        precioPorHora = lav1 
    }else if(tipolavadora === 2){
        precioPorHora = lav2
    }else {
        return -1
    }

    return tipolavadora * precioPorHora * horas
}

/// funcion3 para descuento
function aplicardescuento(total, numlavadoras) {
    if (numlavadoras >= 3){
        return total * 0.3
    }
    return total 
}

/// funcion para dar el  valor total a pagar

function valortotal() {
    let datos = recoletardatos()
    let total = calcularprecio(datos.tipolavadora, datos.numlavadoras, datos.horas)

    if (total === -1) {
        console.log('ERROR: Selección incorrecta. Vuelve a intentarlo.')
        return
    }

    total = aplicardescuento(total, datos.numlavadoras)

    console.log(`El costo total por alquilar ${datos.numlavadoras} lavadoras de tipo ${datos.tipolavadora} por ${datos.horas} horas es de ${total} pesos.`)
}
    
valortotal()