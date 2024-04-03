
/*SELECCIONAR ELEMENTO*/
const nameUser = document.getElementById('nameUser');
const inputName = document.querySelector('input');
const inputElement = document.querySelector('div input');
const paraphELement = document.querySelectorAll('p');
const father = document.getElementsByClassName('father');


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

const child = document.querySelector('#child');
const fatherElement = child.parentElement.parentElement;
const nextChildElement = child.nextElementSibling;

fatherElement.style.border = '1px solid red';


/************************************************************************ */
// CREATE HTML

const root = document.getElementById('createChild');
const label = document.createElement('LABEL');
const input = document.createElement('INPUT');


label.textContent = 'Nombre';
input.value = 'Hola';

root.appendChild(label);
root.appendChild(input);