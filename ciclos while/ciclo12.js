let modelo = Number(prompt('digite el numero de modelo de su carro'))
let carm = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780]

while (carm) {
    if (carm.includes(modelo)) {
        alert('Su carro es defectuoso')
        break
    }else {
        alert('Su carro no tiene ningun defecto')
        break
      }
}
