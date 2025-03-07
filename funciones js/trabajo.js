function ingresarDatos() {
    let usuario = prompt('Ingrese su nombre señor(@) usuario:')
    let horas = Number(prompt('Ingrese la cantidad de horas trabajadas:'))
    
    return { usuario, horas };
}


function calcularSueldo(horas, usuario) {
    let pagoporhora = 30000
    let salarioTotal = horas * pagoporhora

    if (horas > 10) {
        salarioTotal += horas * 3000
    }

    console.log(`Señor(@) ${usuario}, la cantidad de horas trabajadas son ${horas}, por lo tanto, su salario es de ${salarioTotal} pesos.`);
    
    return salarioTotal; 

}
function pagototal() {
    let datos = ingresarDatos() 
    calcularSueldo(datos.horas, datos.usuario) 
}


pagototal()