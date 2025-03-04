let g = prompt('señor(@) usuario ingrese su genero, si es Hombre  o  si es Mujer ')
let edad = Number(prompt('digite su edad señor(@) usuario'))

while (g, edad) {
    if(g === 'mujer' && edad >= 50){
        alert('señora usuaria usted Reciben, $120,000.')
        break
    }else if (g === 'mujer' && edad <= 50 && edad >= 30){
        alert('señora usuaria usted Reciben, $100,000.')
        break
    }else if(g === 'mujer' && edad < 30){ 
        alert('señora usuaria usted no recibe ayuda.')
        break
    }else if(g === 'hombre'){
        alert('todo señor usuario Reciben $40,000 (sin importar la edad).')
        break
    }   
}





    

