const listaDeTeclas = document.querySelectorAll(".tecla");
const listaDeSons = document.querySelectorAll("audio");

console.log(listaDeSons);

function tocarSom(idSomEscolhido){
    const elemento = document.querySelector(idSomEscolhido);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado');
    }
}

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
    }
}

listaDeTeclas.forEach(tecla => tecla.addEventListener('click', function (event){
    const elementoClicado = event.target;

    if (elementoClicado.classList.contains('ativa')){
        elementoClicado.classList.remove('ativa');
    } else{
        elementoClicado.classList.add('ativa');
    }
}))