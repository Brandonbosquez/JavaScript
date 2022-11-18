'use strict';
function dice(){
    const roll = Math.floor(Math.random() * 6) + 1;
    return roll
}

let eyeSix = dice();

var ul = document.createElement('ul');
var li = document.createElement('li');
li.innerHTML = eyeSix;
ul.appendChild(li);

while (eyeSix !== 6) {
    eyeSix = dice()
    var li = document.createElement('li');
    li.innerHTML = eyeSix;
    ul.appendChild(li);

}

document.getElementById('text-area').appendChild(ul);