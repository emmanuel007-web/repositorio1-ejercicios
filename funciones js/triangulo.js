function ingresarAngulos() {
    let lado1 = Number(prompt('ingrese el primer angulo'))
    let lado2 = Number(prompt('ingrese el segundo angulo'))
    let lado3 = Number(prompt('ingrese el tercer angulo'))

    return{lado1, lado2, lado3}
}

function sacarSuma(lado1, lado2, lado3) {
    let triangulo = lado1 +lado2 + lado3

    if ( triangulo === 180){
        alert(`este es un triangulo valido, por que la suma interna de los angulos es de: ${triangulo}`) 
     }else{
         alert(`este no es un triangulo valido, por que la suma interna de los angulos es de: ${triangulo}`)
     }

     return(lado1, lado2, lado3)
}

function mostrar() {
    let datos = ingresarAngulos()
    sacarSuma(datos.lado1, datos.lado2, datos.lado3)
}

mostrar()