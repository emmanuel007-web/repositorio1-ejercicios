function ingresarPlaca() {
    let modelo = Number(prompt('digite el numero de modelo de su carro'))
    return{modelo}
}


function sacarCar(modelo) {
    let carm = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780] 
    
    if (carm.includes(modelo)) {
        alert('Su carro es defectuoso')
    }else {
        alert('Su carro no tiene ningun defecto')
    }

    return modelo

}

function mostrar() {
    let datos = ingresarPlaca()
    sacarCar(datos.modelo)
}
mostrar()