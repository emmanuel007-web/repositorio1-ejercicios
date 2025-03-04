let nombreingresado = prompt('ingrese su nombre ')

let emailbasedatos = 'emmanueltapasco07@gmail.com'
let clavebasedatos = '1234567'
let emailingresado = prompt('ingrese su correo...')
let claveingresada = prompt('ingrese su contraseña ')


switch (emailbasedatos && clavebasedatos) {
    case  emailingresado &&  claveingresada:
        alert(`bienvenido ${nombreingresado} su ingreso fue un exito`)
        break;

    default:
        alert(' ⚠ acceso denegado.............')
        break;
}