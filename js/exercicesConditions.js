console.log("\n#######   EXERCICE 1  #####\n\n");

if (true) {
    console.log("Condition is working ! 1");        //la variable true est vrai donc la condition est executé
}


if (false) {
    console.log("Condition is working !");          //la variable false est fausse donc la condition est pas executé
  }
  else {
    console.log("Condition is not working ! 2");    // du coup cette condition est executé a la place
  }


if (false === false) {
    console.log("Condition is working ! 3");       // false est strictement egal a false donc la condition est vrai et execute le code
  }



//-----------------------------------------------------------------------------------------------------
console.log("\n\n#######   EXERCICE 2  #####\n\n");


var content;

if (content) {
    console.log("Condition is OK"); // cette condition n'est pas executer si "content" contien aucune valeur
  }                                 // cette condition est executer si "content" contien true en valeur
                                    // cette condition n'est pas executer si "content" contien false en valeur
                                    // cette condition est executer si "content" contien "texte" valeur
                                    // cette condition est executer si "content" contien "123" valeur
  else {
    console.log("Condition is KO"); // cette condition est executer si content contien aucune valeur
  }                                 // cette condition n'est pas executer si "content" contien true valeur
                                    // cette condition est executer si "content" contien false en valeur
                                    // cette condition n'est pas executer si "content" contien "texte" valeur
                                    // cette condition n'est pas executer si "content" contien "123" valeur



//-----------------------------------------------------------------------------------------------------
console.log("\n\n#######   EXERCICE 3  #####\n\n");

var price = "forty five";

if (price === 45) {
    console.log("The price is a number");   // affiché si price a pour valeur: 45
  }
  else if (price == 45) {
    console.log("The price is a string");   // affiché si price a pour valeur: "45"
  }
  else {
    console.log("The price is something else"); // affiché si price a pour valeur: "forty five"
  }



//-----------------------------------------------------------------------------------------------------
console.log("\n\n#######   EXERCICE 4  #####\n\n");


var age = 34;

if (age >= 18) {
    console.log("Entry allowed")
}
else {
    console.log("Entry not allowed")
}


//-----------------------------------------------------------------------------------------------------
console.log("\n\n#######   EXERCICE 5  #####\n\n");


var store = ["Walmart", "Colorado", "South-Park", 483];

if (store[0] === "Walmart" && store[1] === "South-Park") {
  console.log("The Walmart in South-Park has " + store[3] + " employes");
}
else if(store[0] === "Walmart" || store[1] === "Colorado") {
  console.log("Hum this is an other Walmart from Colorado");
}
else if(store[0] === "Walmar") {
  console.log("Too bad this is just a Walmart");
}
else {
  console.log("test");
}




//-----------------------------------------------------------------------------------------------------
console.log("\n\n#######   EXERCICE 6  #####\n\n");


var student = {
    "Name": "John Doe",
    "Grade": 14
}

if (student["Grade"] < 10) {
    console.log("Recalé");
}
else if (student["Grade"] > 10 && student["Grade"] <= 12){
    console.log("Passable");
}
else if (student["Grade"] > 12 && student["Grade"] <= 14){
    console.log("Moyen");
}
else if (student["Grade"] > 14 && student["Grade"] <= 16){
    console.log("Bien");
}
else {
    console.log("Très bien");
}


//-----------------------------------------------------------------------------------------------------
console.log("\n\n#######   EXERCICE 7  #####\n\n");

var meal = {
    "foodType": "meat",
    "cookedAt": 80,
    "temperature": 60
}

if (meal["cookedAt"] === meal["temperature"]){
    meal["status"]= "Cooked";
    console.log(meal);
}
else if (meal["cookedAt"] < meal["temperature"]){
    meal["status"]= "Uncooked";
    console.log(meal);
}
else {
    meal["status"]= "Overcooked";
    console.log(meal);
}


//-----------------------------------------------------------------------------------------------------
console.log("\n\n#######   EXERCICE 8  #####\n\n");


var number = 42;

if (number > 0) {

  if(number%2 === 0) {
    console.log("number is even");
  }
  else {
    console.log("number is odd");
}
}
else {
    console.log("Please enter a number at least greater than 0");
}