let semaforo = true

let colosemaforo = 'verde'


switch (semaforo) {
    case colosemaforo === 'verde':
        console.log(`el semaforo esta en ${colosemaforo} puede seguir`)
        break;

        case colosemaforo === 'amarillo':
            console.log(`el semaforo esta en ${colosemaforo} preparen motores`)
            break;

            case colosemaforo === 'rojo':
                console.log(`el semaforo esta en ${colosemaforo} pare por favor`)
                break;

    default:
        console.log('el semaforo se encuentra dañado')
        break;
}



