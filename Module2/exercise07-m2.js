'use strict';
function dice(sides){
    const roll = Math.floor(Math.random() * sides) + 1;
    return roll
}
let sides = +prompt("How many sides should the dice have?")
let eyeSix = dice(sides);

var ul = document.createElement('ul');
var li = document.createElement('li');
li.innerHTML = eyeSix;
ul.appendChild(li);

while (eyeSix !== sides) {
    eyeSix = dice(sides)
    var li = document.createElement('li');
    li.innerHTML = eyeSix;
    ul.appendChild(li);

}

document.getElementById('text-area').appendChild(ul);