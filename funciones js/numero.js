function ingreasrNum() {

    let num1 = Number(prompt('ingrese un numero '))
    let num2 = Number(prompt('ingrese el segundo numero'))
    let num3 = Number(prompt('ingrese el tercer numero'))
      
    return{num1, num2, num3}
}

function calcularMayor(num1, num2, num3) {

    if( num1> num2 && num1 > num3 ){
        alert('el primer numero es mayor al resto')
    }
    else if( num2> num1 && num2 > num3){
        alert('el segundo numero es mayor')
    }
    else if( num3 > num1 && num3 > num2){
        alert('el tercer numero es mayor')
    }else{
        alert('los tres numero son iguales ')
    }
    return num1, num2, num3
}


function mayor() {
    let datos = ingreasrNum()
    calcularMayor(datos.num1, datos.num2, datos.num3)
}


mayor()