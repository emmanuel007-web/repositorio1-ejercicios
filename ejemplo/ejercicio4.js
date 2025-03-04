let correo = prompt('digite su correo electronico')
let password = prompt('digite su contraseña')

let email = true

switch ( email ) {
    case correo === 'emmanueltapasco07@gmail.com' &&  password === '123456' :
        alert('Bienvenido su ingreso fue exitoso')
        break;

    default:
        alert('su contraseña o email es invalido')
        break;
}
