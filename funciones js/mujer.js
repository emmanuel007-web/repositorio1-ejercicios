function ingresarNom() {
    let g = prompt('señor(@) usuario ingrese su genero, si es Hombre  o  si es Mujer ')
    let edad = Number(prompt('digite su edad señor(@) usuario'))

    return{g, edad}
}

function sacarMayor(g, edad) {
    if(g === 'mujer' && edad >= 50){
        alert('señora usuaria usted Reciben, $120,000.')
    }else if (g === 'mujer' && edad <= 50 && edad >= 30){
        alert('señora usuaria usted Reciben, $100,000.')
    }else if(g === 'mujer' && edad < 30){ 
        alert('señora usuaria usted no recibe ayuda.')
    }else {
        alert('señor usuario usted  recibe 40.000 sin importar su edad.')
    }

    return(g, edad)
}

function mostrar() {
    let datos = ingresarNom()
    sacarMayor(datos.g, datos.edad)
}

mostrar()