console.log("\n#######   EXERCICE 1  #####\n\n");

var i = 0;
while (i <= 9) {
  console.log("One run of the loop");
  i ++;
}
// cette variable est repeter 10 fois, parcour 1 fois pendant que i =0 puis 9 fois

var i = 0;
while (i <= 9) {
  console.log("One run of the loop");
  i += 2;
}
// cette boucle est repeter 5 fois, car i ajoute 2 a chaque tour

/*
var i = 0;
while (i <= 9) {
  console.log("One run of the loop");
}
*/
//cette boucle est infini car la condition i est toujours vrai car toujours a 0.



console.log("\n\n#######   EXERCICE 2  #####\n\n");


for (var i=0; i <=9 ; i++) {
    console.log("One run of the loop");
  }
//il affiche 10 fois la phrase. car est equivalent a la boucle while

for (var i=0; i <=9 ; i+=2) {
    console.log("One run of the loop");
  }
// cette boucle est repeter 5 fois, car i ajoute 2 a chaque tour

/*
for (var i=0; i <=9 ) {
    console.log("One run of the loop");
  }
*/
//cette boucle affiche une erreur de syntaxe
// boucle plus simple

console.log("\n\n#######   EXERCICE 3  #####\n\n");


for( var i=0; i<=100; i++){
  console.log(i);
}


console.log("\n\n#######   EXERCICE 4  #####\n\n");


for( var i=0; i<=100; i++){
  if (i%2 === 0){
  console.log(i + " is even");
  }
  else {
    console.log(i + " is odd");
  }
}


console.log("\n\n#######   EXERCICE 5  #####\n\n");


var items = ["First item", "Second item", "Third item", "Fourth item"];

for (var i=0; i < 4; i++) {
  console.log(items[i]);
}
// affichage de toute les variables du tableau, car la boucle for parcour le tableau items
// la derniere valeur affiché si on remplace par i < 5 sera "undefined"


console.log("\n\n#######   EXERCICE 6  #####\n\n");



var customers = [
  "Albin Term",
  "Anna Sandgrove",
  "John Doe",
  "Terrance Head",
  "Yan Mock",
  "Zoe Durst"
];

console.log("List of all customers : \n");
for (i=0; i < 6; i++) {
  console.log(customers[i] + "\n");
}


console.log("\n\n#######   EXERCICE 7  #####\n\n");


var items = ["First item", "Second item", "Third item", "Fourth item"];

for ( var item of items){
  console.log(item);
}
// la boucle for of affiche les valeur du tableau
// elle est simplifier par rapport a la boucle for


console.log("\n\n#######   EXERCICE 8  #####\n\n");


var citizens = {
  "firstname": "john",
  "lastname": "Doe",
  "age": 45,
  "income": 60000,
  "sexe": 0
}
console.log("Citizen identity : \n")
for (var key in citizens) {
  if (key !== "sexe"){
    console.log(key + " : " + citizens[key]);
  }
  else if (key === "sexe" && citizens["sexe"] === 0){
    console.log(key + " : male");
  }
  else if(key === "sexe" && citizens["sexe"] === 1){
    console.log(key + " : female");
  }
}



console.log("\n\n#######   EXERCICE 9  #####\n\n");


var citizens = [
  {
    "firstname" : "John",
    "lastname" : "Doe"
  },
  {
    "firstname" : "Anna",
    "lastname" : "Molner"
  },
  {
    "firstname" : "Harry",
    "lastname" : "Trueman"
  },
  {
    "firstname" : "Cecile",
    "lastname" : "Mercier"
  }
];

for ( var citizen of citizens){
  console.log("\nCitizen :");
  for (var key in citizen){
    console.log(key + " : " + citizen[key]);    
  }
}