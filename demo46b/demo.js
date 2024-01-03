// alert('soy el alert saludando desde el archivo demo.js')

const button = document.querySelector('.btn')
// console.log(button);

button.addEventListener('click', function(evento){
    console.log(evento.target.value);
    console.log(evento.type);
    console.log('hola');
})

// document.getElementById('divContainer').innerText = 'Hello World'
// console.log(document.getElementsByTagName('div')[2]);
const estilo = document.querySelector('#title')

// console.log(estilo.style);
estilo.style.color = 'blue'

const utiles = ['lápiz', 'cuadernos', 'borrador', 'lapicero', 'regla']

const lista = document.getElementById('lista')

utiles.forEach(util => {
    const elemento = document.createElement('li') // <li></li>
    elemento.innerText = util // <li>lápiz</li>
    lista.appendChild(elemento)
})

const divs = document.querySelectorAll('.divNumbers') //Lista de HTMLCollection 

console.log(divs);

divs.forEach(elemento => {
    elemento.addEventListener('click', function(){
        let amarillo = "rgb(233, 255, 112)";
        let gris = "rgb(240, 234, 210)";

        if(elemento.style.background === amarillo) elemento.style.background = gris
        else elemento.style.background = amarillo
    })
})


