let amigo = {nome: 'josé', 
sexo: 'M',
peso: 85.4,
engordar(p=0) {
    console.log('engordar')
    this.peso += p
}}
console.log(typeof amigo)