'use strict';
const dogNames = []
for(let i = 0; i<6;i++){
    dogNames[i] = prompt(`Give me dog #${i+1}'s name:`);
}
dogNames.reverse();

var ul = document.createElement('ul');

for(let i = 0; i <6; i++){
    var li = document.createElement('li');
    li.innerHTML = dogNames[i];
    ul.appendChild(li);
}

document.getElementById('textArea').appendChild(ul);