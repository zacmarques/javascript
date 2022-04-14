function gerar(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
        
    } else{
        let n = Number(num.value)
        let tn = 1
        tab.innerHTML = ``
        for(tn = 1; tn <= 100; n*tn){
            let item = document.createElement('option')
            item.text = `${n} x ${tn} = ${n*tn}`
            item.value = `tabx${tn}` //Necessário que cada option tenha um value, isso faz com que o value seja nomeado automaticamente.
            tab.appendChild(item)
            tn++   
        }
    }
}