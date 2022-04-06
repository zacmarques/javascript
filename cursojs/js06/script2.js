function calcular(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 1920|| fano.value > ano) {
        window.alert('[ERRO] Por favor, verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gener = '';
        var estadom = '';
        var estadof = '';
        if (fsex[0].checked){
            gener = Masculino
            estadom = idade > 0 && idade < 12? 'Criança': idade < 21? 'Jovem': idade < 65? 'Adulto': 'Idoso';
        } else if(fsex[1].checked){
            gener = Feminino
            estadof = idade > 0 && idade < 12? 'Criança': idade < 21? 'Jovem': idade < 65? 'Adulta': 'Idosa';
        }
        res.innerHTML = `<p>Você é <strong>${estado}</strong> do gênero <strong>${gener}</strong> e a sua idade é: <strong>${idade} anos</strong>!</p>`
    }
}