function carregar() {
    var res = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var txt = window.document.getElementById('txtano')
    var estação = ''
    var mês = ''
    switch(txt.value.toUpperCase()){//transforma oq será digitado em MAIÚSCULO.
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': case '1': case '2': case '3':
        estação = 'INVERNO'    
        res.innerHTML = `<p>Estamos na estação: <mark>${(estação[0].toUpperCase() + estação.slice(1).toLowerCase())}</mark></p>`
        res.innerHTML += `<p>Caracteriza-se pela queda das temperaturas e, em alguns lugares do Hemisfério Sul, pela ocorrência de geadas e nevascas. Apresenta dias mais curtos e noite mais longas em decorrência da menor incidência solar. Nesse período, ocorrem migrações de diversas espécies de animais para áreas com temperaturas mais elevadas.</p>` 
        img.src = 'inverno.png'
        document.body.style.background = '#929294'
        if(mês == '1'){
            mês = "JANEIRO"
        }else if(mês == '2'){
            mês = 'FEVEREIRO'
        }else{
            mês = 'MARÇO'
        }
        break
        case 'ABRIL': case 'MAIO': case 'JUNHO': case '4': case '5': case '6':
        estação = 'PRIMAVERA'
        res.innerHTML = `<p>Estamos na estação: <mark>${(estação[0].toUpperCase() + estação.slice(1).toLowerCase())}</mark></p>` //nome com a primeira letra Maiúscula
        res.innerHTML += `<p>Apresenta temperaturas amenas e agradáveis e aumento dos índices pluviométricos. Os dias começam a ficar mais longos, e as noites passam a ser mais curtas. A característica principal dessa estação é reflorescimento da flora terrestre.</p>`
        img.src = 'primavera.png'
        document.body.style.background = '#ffabc6'   
        if(mês == '4'){
            mês = "ABRIL"
        }else if(mês == '5'){
            mês = 'MAIO'
        }else{
            mês = 'JUNHO'
        } 
        break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO': case '7': case '8': case '9':
        estação = 'VERÃO'  
        res.innerHTML = `<p>Estamos na estação: <mark>${(estação[0].toUpperCase() + estação.slice(1).toLowerCase())}</mark></p>`
        res.innerHTML += `<p>Apresenta temperaturas elevadas e dias mais longos que as noites. Nesse período, há aumento dos índices pluviométricos. Essa estação do ano sucede a primavera e antecede o outono.</p>`
        img.src = 'verao.png'
        document.body.style.background = '#a7d558'   
        if(mês == '7'){
            mês = "JULHO"
        }else if(mês == '8'){
            mês = 'AGOSTO'
        }else{
            mês = 'SETEMBRO'
        }  
        break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO': case '10': case '11': case '12':
        estação = 'OUTONO'  
        res.innerHTML = `<p>Estamos na estação: <mark>${(estação[0].toUpperCase() + estação.slice(1).toLowerCase())}</mark></p>`
        res.innerHTML += `<p>É considerado um período de transição e caracteriza-se pelo declínio das temperaturas, com exceção das regiões que se localizam próximo ao Equador. Nesse período, as folhas das árvores apresentam tons amarelados e costumam cair, indicando mudança de estação.<p>`
        img.src = 'outono.png'
        document.body.style.background = '#fe8e42'   
        if(mês == '10'){
            mês = "OUTUBRO"
        }else if(mês == '11'){
            mês = 'NOVEMBRO'
        }else{
            mês = 'DEZEMBRO'
        }  
        break
        default:
            estação = 'INDEFINIDA'
            res.innerHTML = `<p>ERROR, "estação não encontrada"</p>`

        break
    } 
}