'use strict';
var ul= document.createElement('ol');
const numberParticipants = +prompt('How many participants should there be?');
const participantsList = [];
for(let i = 0; i <numberParticipants;i++){
    participantsList[i] = prompt(`Give me participant #${i+1}`);
}
participantsList.sort();
for(let i = 0; i < numberParticipants; i++){
    var li = document.createElement('li');
    li.innerHTML = participantsList[i];
    ul.appendChild(li);
}
document.getElementById('textArea').appendChild(ul);