'use strict';
const names = ['John', 'Paul', 'Jones'];

const ul = document.querySelector('#target');
const li = document.createElement('li');
ul.appendChild(li);
const li2 = document.createElement('li');
ul.appendChild(li2);
const li3 = document.createElement('li');
ul.appendChild(li3);

const lista = document.querySelectorAll('li');

for (let i = 0; i < 3; i++){
    lista[i].innerText = names[i];
}