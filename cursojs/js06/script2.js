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
        var idadef = idade.value
        var gener = ''
        var estadomc = 'Criança'; //estado masculino criança
        var estadomj = 'Jovem';   //estado masculino jovem
        var estadoma = 'Adulto';  //estado masculino adulto
        var estadomi = 'Idoso';   //estado masculino idoso
        var estadofc = 'Criança'; //estado masculino criança
        var estadofj = 'Jovem';   //estado masculino jovem
        var estadofa = 'Adulta';  //estado masculino adulta
        var estadofi = 'Idosa';   //estado masculino idosa
        if (fsex[0].checked){
            gener = 'Masculino'
            if(idadef > 0 && idadef < 12){
                res.innerHTML = `<p>Você é <strong>${estadomc}</strong> do gênero <strong>${gener}</strong> e a sua idade é: <strong>${idade} anos</strong>!</p>`
            } else if(idadef < 21){
                res.innerHTML = `<p>Você é <strong>${estadomj}</strong> do gênero <strong>${gener}</strong> e a sua idade é: <strong>${idade} anos</strong>!</p>`
            } else if (idadef < 65){
                res.innerHTML = `<p>Você é <strong>${estadoma}</strong> do gênero <strong>${gener}</strong> e a sua idade é: <strong>${idade} anos</strong>!</p>`
            } else (idadef > 65);{
                res.innerHTML = `<p>Você é <strong>${estadomi}</strong> do gênero <strong>${gener}</strong> e a sua idade é: <strong>${idade} anos</strong>!</p>`
            }
        } else if(fsex[1].checked){
            gener = 'Feminino'
            if(idadef > 0 && idadef < 12){
                res.innerHTML = `<p>Você é <strong>${estadofc}</strong> do gênero <strong>${gener}</strong> e a sua idade é: <strong>${idade} anos</strong>!</p>`
            } else if(idadef < 21){
                res.innerHTML = `<p>Você é <strong>${estadofj}</strong> do gênero <strong>${gener}</strong> e a sua idade é: <strong>${idade} anos</strong>!</p>`
            } else if (idadef < 65){
                res.innerHTML = `<p>Você é <strong>${estadofa}</strong> do gênero <strong>${gener}</strong> e a sua idade é: <strong>${idade} anos</strong>!</p>`
            } else (idadef > 65);{
                res.innerHTML = `<p>Você é <strong>${estadofi}</strong> do gênero <strong>${gener}</strong> e a sua idade é: <strong>${idade} anos</strong>!</p>`
            }
        }
    }
}