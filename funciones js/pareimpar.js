function ingresarDatos() {
    let numero = Number(prompt('digite un numero señor(a) usuario '))

    return{numero};
}


function parimpar( numero ) {
     numero % 2
     let resultado = numero % 2
 
    if (resultado === 0){
        console.log(`el numero que digito es par`)
    }else if(resultado === 1){
        console.log(`el numero ingresado es impar`)
    }
    
    return resultado , numero;
}


function main(){
    let datos = ingresarDatos()
    parimpar(datos.numero, datos.resultado)
}


main()