let cliente = Number(prompt('digite 1; si es cliente preferencial, 2; si es cliente normal'))
switch (cliente) {
    case 1:
        alert('usted va hacer atendido en el modulo 1, por ser cliente preferencial')
        break;
        case 2:
            alert('usted va hacer atendido en el modulo 2 y 3 por ser cliente normal')
            break;
    default:
        alert('usted no es cliente del banco, porfavor dirijase al modulo 4 ')
        break;
}