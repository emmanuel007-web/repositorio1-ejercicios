let usuario = prompt('Ingrese su nombre');

while (usuario) {
    let horas = prompt('Ingrese el número de horas (o escriba "salir" para terminar):');

    // Si el usuario escribe "salir", termina el ciclo
    if (horas.toLowerCase() === 'salir') {
        break; // Sale del ciclo si el usuario escribe "salir"
    }

    horas = Number(horas); // Convertir las horas a número

    if (isNaN(horas) || horas < 0) {
        console.log('Por favor, ingrese un número válido de horas.');
        continue; // Si el valor ingresado no es un número, vuelve a pedirlo
    }

    let salario = Math.floor(horas * 30000); // Calcular salario base

    if (horas <= 10) {
        console.log(`Señor(a) ${usuario}, la cantidad de horas trabajadas son ${horas}, por lo tanto su salario es ${salario}`);
    } else if (horas >= 11) {
        salario += horas * 3000; // Si las horas son mayores a 10, se agrega un extra
        console.log(`Señor(a) ${usuario}, la cantidad de horas trabajadas son ${horas}, por lo tanto su salario es ${salario}`);
    }

    // Preguntamos por el nombre de nuevo
    usuario = prompt('Ingrese su nombre nuevamente (o deje en blanco para salir)');
}

console.log('Gracias por utilizar el sistema. ¡Hasta pronto!');