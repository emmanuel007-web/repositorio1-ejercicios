let tempe = Number(prompt('ingrese su temperatura corporal'))
let nitempe = 40

switch (tempe ) {
    case  nitempe >= 40 :
        alert(`usted tiene ${tempe} grados por lo que usted tiene fiebre `)
        break;

    default:
        alert(`usted tiene ${tempe} grados, por lo tanto usted no tiene fiebre`)
        break;
}