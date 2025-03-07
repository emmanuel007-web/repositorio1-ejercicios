function main(derecha, izquierda, arriba, abajo) {
    if (derecha === false){
        console.log(`robot moviendose hacia la derecha`)
    }else if(izquierda === true){
        console.log(`robot moviendose hacia la izquierda`)
    }else if(arriba === false){
        console.log(`robot moviendose hacia arriba`)
    }else if(abajo === true){
        console.log(`robot moviendose hacia abajo`)
    }else{
        console.log(`movimiento extraño`)
    }
}

main(false, true, false, false)