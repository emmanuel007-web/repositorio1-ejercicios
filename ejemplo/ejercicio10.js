let encendido = false
let velocidad = 0

if(encendido){
    console.log('su vehiculo esta encendido')



switch (true) {
    case velocidad ===0 :
        console.log('Su vehículo está frenado')
        break;
        case velocidad >= 1 && velocidad <= 99:
            console.log('Su vehículo está en marcha')
            break;
            case velocidad >= 100:
                console.log('Evite un accidente... exceso de velocidad')
                break;
    default:
        console.log('velocidad no validad')
        break;
}

}else{
    console.log('su vehiculo se encuentra apagado')
}