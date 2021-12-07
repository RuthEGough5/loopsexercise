//1. 
for (i = 1; i < 8; i++){
    console.log(i);
  }
  
//2. 
for (i = 5; i <= 25; i += 4){
    console.log(i);
  }

//3a. 
const wizards = [
    "Harry Potter",
    "Herminone Granger",
    "Ron Weasley"
];
//3b.
for (item of wizards){
    console.log(item);
}
//4a. Create a let variable called harryPotterMovies and set the value to 0 (That's a zero not O).
let harryPotterMovies = 0;

//4b. Create a While Loop that adds 1 to the harryPotterMovies variable each time through the while loop until the harryPotterMovies variable has a value of 8.
while (harryPotterMovies <8) {
(harryPotterMovies++);
}
//4c. 
console.log(harryPotterMovies);

//bonus//
//5a. ...currently only displaying/returning Slytherin...
const hogwartsHouses = (
    `Gryffindor`, 
    `Hufflepuff`,
    `Ravenclaw`, 
    `Slytherin`
);
//5b. Using nested For Of Loops, have each house name displayed in the console/terminal one letter at a time (You will need a console log for this).
for (item of hogwartsHouses){
    console.log(item);
  }

//6a. 
//const quote : ["Yer", "A", "Wizard", "Harry".]

//6b. Using a loop (You can decide which one you want to use) and the QUOTE array have the message "Yer A Wizard Harry" display on ONE line in the console/terminal (NOTE: Must have spaces between the words when it is displayed. Also, You will need a console log for this)(HINT: You will need to create another variable)