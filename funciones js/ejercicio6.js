function medirTem(temperatura) {

    if(temperatura >= 37){
        console.log(`usted tiene fiebre su temperatura es de ${temperatura} grados`)
    }else{
        console.log(`usted no tiene fiebre su temperatura es de  ${temperatura} grados`)
    }
}

console.log(medirTem(38))