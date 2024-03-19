let num = [5, 8, 2, 9, 3]
num.push[1]
num.sort()
console.log(num)
console.log(`O veror tem ${num.length} poisções`)
console.log(`O primeiro valor de vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log('o valor nao foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

