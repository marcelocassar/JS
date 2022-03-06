function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        
        window.alert("Erro - Verifique os dados.")

    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')        
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'dia.jpg')
            } else if (idade >= 10 && idade <18){
                //jovem
                img.setAtribute('src', 'noite.jpg')
            } else if (idade < 65){
                //adulto
                img.setAttribute('src', 'tarde.jpg')
            } else {
                // idoso
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'dia.jpg')
            } else if (idade >= 10 && idade <18){
                //jovem
                img.setAtribute('src', 'noite.jpg')
            } else if (idade < 65){
                //adulto
                img.setAttribute('src', 'tarde.jpg')
            } else {
                // idoso
            }
                
        }
        res.style.textAlign = 'center'
        res.innerHTML = "<p>Detectamos :" + genero +" e idade: " + idade + "</p>"
        res.appendChild(img)
    }
    }