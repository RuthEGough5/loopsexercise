// LOOPS EXERCISE

// 1
for (i = 1; i <= 7; i++){
    console.log(i);
  }
  // OR
  // for (i = 1; i < 8; i++){
  //   console.log(i);
  // }
  
  console.log("========");
  
  // 2
  for (i = 5; i <= 25; i+=4){
    console.log(i);
  }
  
  console.log("========");
  
  // 3a
  const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
  ];
  
  // 3b
  for (items of wizards){
    console.log(items);
  }
  
  console.log("========");
  
  // 4a
  let harryPotterMovies = 0;
  
  // 4b
  while (harryPotterMovies < 8){
    harryPotterMovies++;
  }
  // OR
  // while(true){
  //   harryPotterMovies++;
  //   if (harryPotterMovies === 8){
  //     break;
  //   }
  // }
  
  // 4c
  console.log(harryPotterMovies);
  
  console.log("===========");
  
  // BONUS
  // 5a
  const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
  ];
  
  // 5b
  for (houses of hogwartsHouses){
    for (letters of houses){
      console.log(letters);
    }
  }
  
  console.log("=========");
  
  // 6a
  const quote = ["Yer", "A", "Wizard", "Harry"];
  
  // 6b
  // USING A FOR OF LOOP
  // let sentence = "";
  // for (word of quote){
  //   console.log(word);
  //   sentence += `${word} `;
  //   console.log(sentence);
  // }
  // console.log(sentence.trim());
  
  // USING A FOR LOOP
  let sentence = "";
  for (i = 0; i < quote.length; i++){
    // console.log(quote[i]);
    sentence += `${quote[i]} `;
    console.log(sentence);
  }
  console.log(sentence.trim());
  
  
  // let sentence = "";
  // while (quote !== sentence){
  //   console.log(quote.join(" "));
  //   break;
  // }