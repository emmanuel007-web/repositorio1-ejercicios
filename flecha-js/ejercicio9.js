const esPalindromo = num =>{
    if(!Number.isInteger(num)){
        return "El valor debe ser un número entero."
    }



    const numString = Math.abs(num).toString()


    let numIvertido = ""


    for(let i = numString.length - 1; i >= 0; i--){
        numIvertido += numString[i]
    }


    return numString === numIvertido
}


console.log(esPalindromo(12321))
console.log(esPalindromo(54765))
console.log(esPalindromo(-101))
console.log(esPalindromo(3.14))