function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora<12){
        //bom dia
        img.src = "../Aula13/imagens/dia.jpg"
        document.body.style.background = '#1A2A40'
    } else if (hora>=12 && hora<16){
        //tarde
        img.src = "../Aula13/imagens/tarde.jpg"
        document.body.style.background = '#BFB188'
    } else {
        //noite
        img.src = "../Aula13/imagens/noite.jpg"
        document.body.style.background = '#F27F3D'
    }


}