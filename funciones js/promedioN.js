function ingresarDatos() {
    let N1 = Number(prompt('Digite su nota en el área de Física'));
    let N2 = Number(prompt('Digite su nota en el área de Química'));
    let N3 = Number(prompt('Digite su nota en el área de Biología'));
    let N4 = Number(prompt('Digite su nota en el área de Matemáticas'));
    let N5 = Number(prompt('Digite su nota en el área de Informática'));
    return { N1, N2, N3, N4, N5 };
}



function sacarPromedio(N1, N2, N3, N4, N5) {
    let notaF = ((N1 + N2 + N3 + N4 + N5) / 50)* 100  
    if (notaF >= 80) {
        console.log(`Su nota es ${notaF}, y su calificación cualitativa es superior`);
    } else if (notaF >= 60 && notaF < 80) {  
        console.log(`Su nota es ${notaF}, y su calificación cualitativa es buena`);
    } else {
        console.log(`Su nota es ${notaF}, y su calificación cualitativa es mala`);
    }
    
    return notaF;
}



function recolectar() {
    let datos = ingresarDatos();
    sacarPromedio(datos.N1, datos.N2, datos.N3, datos.N4, datos.N5);
}

recolectar()

