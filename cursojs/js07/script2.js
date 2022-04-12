function contar(){
    var ini = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.querySelector('div#res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML += `<p class="res"> Não foi possível identificar o <strong>início</strong>, o <strong>fim</strong> ou o <strong>valor de pulos</strong>. Reescreva corretamente os respectivos campos e tente novamente.</p>`
    } else {
        res.innerHTML = `<p>Contando: </p>`
        var i = Number(txtini.value)
        var f = Number(txtfim.value)
        var p = Number(txtpas.value)
        if (p <= 0){
            window.alert('Passo inválido, mínimo necessário é 1! Considerando o Passo como 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c}, `
            }
        } else if(i > f) {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}, \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }


}