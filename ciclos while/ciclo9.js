let lado1 = Number(prompt('ingrese el primer angulo'))
let lado2 = Number(prompt('ingrese el segundo angulo'))
let lado3 = Number(prompt('ingrese el tercer angulo'))

let triangulo = lado1 +lado2 + lado3
while (triangulo) {
    if ( triangulo === 180){
        alert(`este es un triangulo valido, por que la suma interna de los angulos es de: ${triangulo}`) 
        break
     }else{
        alert(`este no es un triangulo valido, por que la suma interna de los angulos es de: ${triangulo}`)
        break
     }
}
