
const titulo = document.getElementById('titulo')
const paragrafo = document.getElementById('paragrafo')
const caixa = document.getElementById('caixa')
const lista = document.getElementById('lista')

const contadorTexto = document.getElementById('contador')

const btnTexto = document.getElementById('btnTexto')
const btnCor = document.getElementById('btnCor')
const btnFundo = document.getElementById('btnFundo')
const btnDestaque = document.getElementById('btnDestaque')
const btnFonte = document.getElementById('btnFonte')
const btnAdicionar = document.getElementById('btnAdcionar')
const btnRemover = document.getElementById('btnRemover')
const btnContador = document.getElementById('btnContador')

btnTexto.addEventListener('click', function(){
    paragrafo.textContent = 'Texto alterado'
})

btnCor.addEventListener('click', function(){
    paragrafo.style.color = 'blue'
})

btnFundo.addEventListener('click', function(){
    caixa.style.backgroundColor = '#a0e7e5'
})

btnDestaque.addEventListener('click', function(){
    caixa.classList.toggle('destaque')
})

btnFonte.addEventListener('click', function(){
    titulo.style.fontSize = '40px'
    titulo.style.color = 'yellow'
    titulo.style.fontWeight = 'bold'
    titulo.style.fontFamily = 'Arial'
})

btnAdicionar.addEventListener('click', function (){
    const novoItem = document.createElement('li')
    novoItem.textContent = 'Item' + (lista.children.lenght + 1)
})
btnRemover.addEventListener('click',function (){
    if (lista.lastElementChild) {
        lista.lastElementChild.remove()
    }
})

let cliques = 0

btnContador.addEventListener('click', function(){
    //cliques = cliques + 1
    cliques += 1
    contadorTexto.textContent = cliques
})

