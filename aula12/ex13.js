var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

switch(diaSem) {
case 0: 
    console.log('domigo')
    break
case 1:
    console.log('segunda - Feira')
    break
case 2:
    console.log('Terça - feira')
    break
case 3: 
    console.log('Quarta - Feira')
    break
case 4: 
    console.log('Quinta - Feira')
    break
case 5:
    console.log('Sexta - Feira')
    break
case 6:
    console.log('sabado')
    break
    default: 
        console.log('[ERROR] Dia inválido')
        break
        

}