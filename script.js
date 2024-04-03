
/*SELECCIONAR ELEMENTO*/
const nameUser = document.getElementById('nameUser');
const inputName = document.querySelector('input');
const inputElement = document.querySelector('div input');
const paraphELement = document.querySelectorAll('p');
// const father = document.getElementsByClassName('father');


/************************************************************************ */

/*MODIFICA ELEMENTO*/
const contentModify = document.getElementById('contentModify');
const nameChange = document.querySelector('#nameChange');
nameChange.textContent = 'Hola, soy Luis';
contentModify.innerHTML = `<p>Bienvenido</p>`;


/************************************************************************ */

/*ESTILOS */
const buttonStyle = document.querySelector('#buttonStyle');
buttonStyle.textContent = 'Presion';
buttonStyle.style.backgroundColor = 'red';
buttonStyle.style.border = 'none'

buttonStyle.classList.add('activo');


/************************************************************************ */

// DOM TRAVERSING

const nieto = document.querySelector('.nieto-1');

const father = nieto.parentElement.parentElement;

const elementSibling = nieto.nextElementSibling;

father.style.border = '1px solid red';
// console.log(father);

console.log(elementSibling);


/************************************************************************ */
// CREATE HTML

// create element
const greeting = document.createElement('p');
const root = document.getElementById('root');

// agregar contenido
greeting.textContent = 'Hola soy un parrafo creado por JS';

// agregar atributos(opcional)
greeting.classList.add('mensaje');

// Rendizar el elemento
root.appendChild(greeting);

// console.log(greeting);
