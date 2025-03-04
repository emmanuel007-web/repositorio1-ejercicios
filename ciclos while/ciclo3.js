let tipolavadora = Number(prompt('selecione el tipo de lavadora que desea utilizar tipo 1 o 2'))
let numerodelavadoras = Number(prompt('digite la cantidad de lavadoras alquiladas'))
let horas = Number(prompt('digite la cantidad de horas de alquiler '))

let lavadora1 = 4000
let lavadora2 = 3000
let total = 0
while (tipolavadora) {
    if( tipolavadora === 1 ){
    total += lavadora1 * horas * numerodelavadoras
    console.log( `el costo total por alquilar ${numerodelavadoras} lavadoras de tipo ${tipolavadora} por ${horas} horas : es de ${total}`  )
    break
    }else if (tipolavadora === 2){
        total += lavadora2 * horas * numerodelavadoras
        console.log( `el costo total por alquilar ${numerodelavadoras} lavadoras de tipo ${tipolavadora} por ${horas} horas : es de ${total}`  )
        break
    }else{
        console.log('ERROR.......... vuelve a intentarlo')
        break
    }
if (numerodelavadoras >= 3){
    let descuento = total * 0.03
    total -= descuento
    console.log(`con el descuento del 3% usted debe de pagar un total de ${total}`)
    break
}
    
}
