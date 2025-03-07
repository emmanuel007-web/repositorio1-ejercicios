function mostrarTipocli(cliente) {
    if(cliente === 'preferencial'){
        console.log(`usted va hacer atendido en el modulo 2 y 3,por ser cliente ${cliente}`)
    }else if(cliente === 'normal'){
        console.log(`va hacer atendido en el madulo 1, por ser cliente ${cliente}`)
    }else{
        console.log(`usted no es cliente del banco, porfavor dirijase al modulo 4`)
    }
}

mostrarTipocli('preferencial')