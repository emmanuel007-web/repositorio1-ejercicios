let opera = prompt('Por favor ingrese su operador  ')
let minInter = Number(prompt('ingrese la cantidad de minutos internacionales  consumidos '))
let total = 0
let fijo = 0 

if(opera === 'tigo'){
    total = minInter*200 
    fijo = 45000 - total - 12000
    alert(`El cargo fijo $45000, valor minuto internacional $200, ${total}  valor paquete de datos $12000, su restante es ${fijo}`)
}else if(opera === 'claro'){
    total = minInter*100 
    fijo = 30000 - total - 18000
    alert(`El cargo fijo $30000, valor minuto internacional $100, ${total}  valor paquete de datos $18000, su restante es ${fijo} `)
}if(opera === 'movistar'){
    total = minInter*250 
    fijo = 40000 - total - 8000
    alert(`El cargo fijo $40000, valor minuto internacional $250, ${total}  valor paquete de datos $8000, su restante es ${fijo} `)
}else {
    alert('este tipo de operador no se encuentra en nuestro sistema')
}