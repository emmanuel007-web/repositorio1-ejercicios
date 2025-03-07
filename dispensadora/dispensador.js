function ingresarElecion() {
    let tipodulce = Number(prompt('ingrese un 1 si desea  chocolatina o 2 para refresco'))
    let cantidad = Number(prompt('ingrese la cantidad que desea'))
    let valoringresado = parseInt(prompt('ingrese su dinero'))

    return{tipodulce, cantidad, valoringresado }
}


function selecionarTipo(tipodulce, cantidad, valorIngresado) {
    let prod1 = 700
    let prod2 = 2500
    let total = 0

    if(tipodulce === 1){
        total = prod1 * cantidad
    }else if(tipodulce === 2){
        total = prod2 * cantidad 
    }else{
        alert('ingrese un valor valido............ ERROR ')
        return 
    }

    if (valorIngresado < total) {
        alert(`Dinero insuficiente. El total es ${total}, pero solo ingresó ${valorIngresado}`);
    } else {
        let devuelta = valorIngresado - total;
        alert(`El total a pagar es ${total}. Su cambio es ${devuelta}`);
    }
    
}



function main() {
    let datos = ingresarElecion()
    selecionarTipo(datos.tipodulce, datos.cantidad, datos.valoringresado)
}

main()