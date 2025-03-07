function ingrerMensu() {
    let mensualidad = Number(prompt('ingrese su tipo de mensualidad sabiendo que 1 es para mensualidad de 15 dias, 2 para mensualidad de 30 dias, o 3 para mensualidad de  3 meses'))


    return{mensualidad}
}

function sacarMensu(mensualidad) {
    if(mensualidad === 1){
        alert('su valor a pagar por la mensualidad de 15 dias es de 18,000.')
    }else if(mensualidad === 2){
        alert('su valor a pagar por la mensualidad de 30 dias es de 35,000.')
    }else if(mensualidad=== 3){
        alert('su valor a pagar por la mensualidad de 3 meses es de 86,000.')
    }else{
        alert('no se encuentra ninguna mensualidad con los datos ingresados')
    }

    return(mensualidad)
}

function mostrar() {

    let datos = ingrerMensu()
    sacarMensu(datos.mensualidad)
}

mostrar()