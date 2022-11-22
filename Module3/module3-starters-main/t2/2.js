'use strict';

const ul = document.querySelector('#target');

const li = document.createElement('li');
li.innerText = 'First item';

ul.appendChild(li);

const li2 = document.createElement('li');
li2.innerText = 'Second item';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Third item';
ul.appendChild(li3);

li2.setAttribute('Class','my-class');



