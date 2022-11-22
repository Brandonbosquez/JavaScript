'use strict';
function voting(){
    var elections = []
    let candidates = +prompt("How many candidates will there be:");
    for (let i = 0; i <candidates; i++){
        var canname = prompt(`Name of candidate ${i+1}`);
        var candidate = { name: canname ,votes:0};
        elections.push(candidate);
    }
    let voters = prompt("How many voters will there be:");
    for (let i = 0; i < voters; i++){
        let vote = prompt(`VOTER ${i+1}: Who do you vote for?`);
        for (let candidato of elections){
            if (vote === candidato.name){
                candidato.votes++
            }
        }
    }
    elections.sort((a, b) => {
   console.log(a, b);
   return b.votes - a.votes;
})
    document.querySelector('#text-area').innerHTML = `The winner is ${elections[0].name} with ${elections[0].votes} votes!!!` ;
    document.querySelector('#result').innerHTML = "Results:<br>";
    for (let candidate in elections){
        document.querySelector('#text-area').innerHTML = "<p>" + elections[candidate].name + "</p>";
        document.querySelector('#text-area').innerHTML = "<p>" +elections[candidate].votes + "</p>";
    }
}
voting();