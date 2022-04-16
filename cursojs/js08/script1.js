//Possibilidades de Variável Composta
let num = [5, 8, 2, 9, 3]
num[5] = 10
num.push(99)
num.length
num.sort()
console.log(`Qual é o vetor? Esse é o vetor: ${num} e ele tem ${num.length} posições`)

//Forma de mostrar cada valor do vetor e sua posição em ordem.
let valor = [0, 2, 4, 6, 8, 12]
for(let pos=0;pos<valor.length;pos++){
    console.log(`A posição ${pos} contêm os valores ${valor[pos]}`)
}

//Forma simplificada de mostrar cada valor do vetor
let valor = [1, 3, 5, 7, 9, 11, 15]
for( let pos in valor){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}

valor.indexOf(9) //Busca um item do vetor e te dá a key que ele tá.