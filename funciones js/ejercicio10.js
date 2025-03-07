function cambiarEstado(encendido, velocidad) {
    

    if(encendido == true){
        console.log(`su carro esta encendido`)
    }else if(velocidad == 0){
        console.log(`carro frenado`) 
    }else if(velocidad > 0 && velocidad <=100){
        console.log(`carro en marcha`)
    }else{
        console.log(`evite un accidente ... exceso de velocidad`)
    }
}

cambiarEstado(false, 134)