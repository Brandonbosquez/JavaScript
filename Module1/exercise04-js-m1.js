  //  Gryffindor, Slytherin, Hufflepuff, and Ravenclaw
  let name = prompt("Welcome to the Harry Potter Sorting Hat\n What is your name?");
  let room = Math.floor(Math.random() * 4) + 1;
      if (room == 1) {
          document.write(name + ", you are Gryffindor");
      } else if (room == 2) {
          document.write(name + ", you are Slytherin");
      } else if (room == 3) {
          document.write(name + ", you are Hufflepuff");
      } else {
          document.write(name + ", you are Ravenclaw");
      }
