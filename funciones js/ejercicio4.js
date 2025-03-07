function mostrarCorreo(email, contraseña) {

    if(email == "emmanueltapasco07@gmail.com" && contraseña == "12345"){
        console.log('BIENVENIDO su ingreso fue un exito')
    }else{
        console.log('su contraseña o email es invalido')
    }
}

console.log(mostrarCorreo("emmanueltapasco07@gmail.com", "12345"))