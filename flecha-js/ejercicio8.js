const calcularPotencia = (base, exponente) => {

    if(!Number.isInteger(base) || !Number.isInteger(exponente)){
        return "Ambos números deben ser enteros."
    }

    //______________________________________________

    if(exponente === 0 ){
        return 1
    }

    //_________________________________________________

    if(base === 0 && exponente < 0){
        return "No se puede realizar la operacion."
    }
    let resultado = 1

    //___________________________________________________

    for (let i = 0; i< Math.abs(exponente); i++){
        resultado *= base
    }

    //_____________________________________________

    return exponente < 0 ? 1 / resultado : resultado 
}

console.log(calcularPotencia(2, 3))
console.log(calcularPotencia(5, -2))
console.log(calcularPotencia(0, -5))
console.log(calcularPotencia(3.5, 2))