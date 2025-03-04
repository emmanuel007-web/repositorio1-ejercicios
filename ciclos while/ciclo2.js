let numero = Number(prompt('Digite un numero '))


while (numero) {

    let resultado = numero % 2

    if (resultado === 0) {
        console.log('el numero que digito es par') 
        break  
    }else if (resultado=== 1){
        console.log('el numero ingresado es impar')
        break
    }
    
}