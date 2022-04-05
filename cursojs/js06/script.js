function carregar() {
    var sect = document.querySelector('section#sect')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 16
    var min = data.getMinutes()
    var sec = data.getSeconds()
    var dia = data.getDay()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    msg.innerHTML = `<p>O dia de hoje é, de acordo com o calendário: <strong>0${dia}/${mes}/${ano}</strong>!</p>`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'imagem/day1.png'
        msg.innerHTML += `<p> Bom dia, sinta o ar da manhã! Agora são exatamente <strong>${hora}<strong> horas, <strong>${min}</strong> minutos e <strong>${sec}</strong> segundos.</p>`
        
    } else if(hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'imagem/evening1.png'
        msg.innerHTML += `<p> Boa tarde, aproveite o pôr-do-sol! Agora são exatamente <strong>${hora}<strong> horas, <strong>${min}</strong> minutos e <strong>${sec}</strong> segundos.</p>`
    } else {
        // Boa noite
        img.src.style() = 'imagem/night1.png'
        msg.innerHTML += `<p> Boa noite, tenha uma ótima noite! Agora são exatamente <strong>${hora}<strong> horas, <strong>${min}</strong> minutos e <strong>${sec}</strong> segundos.</p>`
    }
}