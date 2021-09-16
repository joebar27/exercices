console.log("\n#######   EXERCICE 1  #####\n\n");


Math.random();
// aucun affichage de la fonction à l'écran
//c'est normal
//car c'est un générateur de nombre à virgule alléatoire compris entre 0 et 1 mais sans fonction d'affichage

var rand = Math.random();
console.log(rand);


console.log("\n#######   EXERCICE 2  #####\n\n");


var number = 12.42359;
console.log("Notre nombre de départ : " + number);
// affichage d'un nombre a virgule
var numberRound = Math.round(number);
console.log("Voici notre nombre arrondie : "+ numberRound);
// les nombres sont arrondie suivant leurs valeurs entiere la plus proche 
//avec number = 12.42359 les decimale ne sont pas conserver
var numberRoundDecimal = number.toFixed(2);
console.log(numberRoundDecimal);


console.log("\n#######   EXERCICE 3  #####\n\n");


var age = "35";
console.log(typeof age);
// nous constatons qu'elle est de type string
age = parseInt(age);
console.log(typeof age);
//son type est maintenant de type number


console.log("\n#######   EXERCICE 4  #####\n\n");


var texte = "je suis un texte";
var maxLength = 20;
console.log(texte.length);
// affiche la longueur de mon texte
if (texte.length > maxLength){
    console.log("Your texte is too long");
}
else if( texte.length <= maxLength){
    console.log("ok");
}


console.log("\n#######   EXERCICE 5  #####\n\n");


var texte = "A nice boat";
console.log(typeof texte);
// sont type est un string

var tabLetter = texte.split('');
console.log(tabLetter);
var tabWords = texte.split(' ');
console.log(tabWords);


console.log("\n#######   EXERCICE 6  #####\n\n");


var name = "Paul Dumas";
var expectedName = "paul dumas";

if (name.toLowerCase() === expectedName.toLowerCase()) {
  console.log("OK Paul you can come in");
}
else {
  console.log("We do not know you");
}
// il ne reconnai pas le nom car il est different au niveau de la case
// cette fonction est utile pour comparer des identifiant de connection
// la fonction inverse est .toUpperCase()


console.log("\n#######   EXERCICE 7  #####\n\n");


var newStudent = "Ryan Oper";
var students = ["John Doe", "Jane Doe", "Marc Alm", "Jimmy Turner"];

console.log(typeof newStudent + "\n" + typeof students);

students.push(newStudent);
console.log(students);

var twoNewStudent = ["Franck Martin", "Tom Hawkins"];

for (var student of twoNewStudent){
    students.push(student);
}
console.log(students);


console.log("\n#######   EXERCICE 8  #####\n\n");


var transactions = [102, 50, 4563, 42, 78, 146, 10563];
var researched = 42;

console.log(transactions.includes(researched)); // valeur renvoyer true.
console.log(transactions.includes(44)); // valeur renvoyer false.
// la fonction includes renvoie un boolean et donc verifie si la valeur entré est bien presente dans le tableau

if (transactions.includes(researched) === true){
    console.log("We found a matching transaction");
}
else {
    console.log("No match");
}


console.log("\n#######   EXERCICE 9  #####\n\n");


var students = ["John Doe", "Jane Doe", "Marc Alm", "Jimmy Turner"];
console.log(students);
// etudiant non classé par ordre alphabetique

students.sort();
console.log(students[(students.length-1)]);
