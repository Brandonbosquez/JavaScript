'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const ul = document.querySelector('#target')

for(let i = 0; i < students.length ; i++){
  let option = document.createElement('option')
  option.className = students[i].id;
  option.innerText = students[i].name;
  ul.appendChild(option);
}