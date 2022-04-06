function carregar() {
    var sect = document.querySelector('section#sect')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var ptitle = document.querySelector('p#phead')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    var dia = data.getDate()
    var mes = data.getMonth() + 1
    var ano = data.getFullYear() 
    msg.innerHTML = `<p>O dia de hoje é, de acordo com o calendário: <strong>0${dia}/0${mes}/${ano}</strong>!</p>`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        ptitle.innerHTML = `<p>O sol já nasceu na fazendinha!</p>`
        img.src = 'imagem/day1.png'
        msg.innerHTML += `<p> Bom dia, sinta o ar da manhã! Agora são exatamente <strong>${hora}<strong> horas, <strong>${min}</strong> minutos e <strong>${sec}</strong> segundos.</p>`
        msg.appendChild(img)
        
    } else if(hora >= 12 && hora < 18) {
        // Boa tarde
        ptitle.innerHTML = `<p>O sol está se pondo na fazendinha!</p>`
        img.src = 'imagem/evening1.png'
        msg.innerHTML += `<p> Boa tarde, aproveite o pôr-do-sol! Agora são exatamente <strong>${hora}<strong> horas, <strong>${min}</strong> minutos e <strong>${sec}</strong> segundos.</p>`
        document.body.style.background = '#b9846f'
        msg.appendChild(img)
    } else {
        // Boa noite
        ptitle.innerHTML = `<p>A lua cheia clareia as ruas do Capão!</p>`
        img.src = 'imagem/night1.png'
        msg.innerHTML += `<p> Boa noite, tenha uma ótima noite! Agora são exatamente <strong>${hora}<strong> horas, <strong>${min}</strong> minutos e <strong>${sec}</strong> segundos.</p>`
        document.body.style.background = '#1A4457'
        msg.appendChild(img)
    }
}