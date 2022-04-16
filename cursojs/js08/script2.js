//Primeiro exemplo prático
function parimpar(n){
    if(n%2==0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
let res = parimpar(22)
console.log(res)

//Segundo exemplo prático
function soma(n1=0, n2=0){
   return n1 + n2 
}
console.log(soma(5,10))

//Terceiro exemplo prático
let v = function(x){
    return x*2
}
console.log(v(5))

//Quarto exemplo prático
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//Quinto exemplo prático -> Recursividade(function que chama ela mesma)
function fatorial(n){
    if(n==1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))