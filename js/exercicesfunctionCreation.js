console.log("\n#######   EXERCICE 1  #####\n\n");


// function product(){
//     console.log("I am the product function");
// }
// // cette fonction n'affiche rien car elle n'est pas appeler, pour etre effectué elle doit etre en premier temps créé puis en second temps appelé.

// product();

//cette fonction n'a pas d'interet car n'a pas d'input ni de output.
// cette fonction est faite pour produire un resultat et est donc pas cohérente.

function product(a, b){
    result = a * b;
    return result;
}

product(8,3);
console.log("The result of the function is : " + result);


// la fonction est maintenant coherante et affiche le resultat de l'opération.
// le probleme restant est qu'il n'y a aucun input pour apporté les variable.
// en ajoutant les variable a et b en entré le resultat est identique car l'opération interne a la fonction n'en tien pas compte.
// en ajoutant les variable 8 et 3 dans l'appel a la fonction rien ne change car l'operation ne tien toujours pas compte des variables.
// en ajoutant les variable a et b dans l'operation interne à la fonction nous recuperons bien le resultat attendu.
// le probleme avec cette fonction est qu'elle n'existe que localement et qu'aucune variable ne la recupere pour la renvoyé ailleur avec un return.
// avec la modification de la fonction (ajout d'un return a la place d'un console.log) le resultat n'est plus affiché car il n'y a plus de fonction d'affichage.


console.log("\n#######   EXERCICE 2  #####\n\n");


function showDigits(a){
    for (var i=0; i <= a; i++){
        console.log(i);
    }
}

showDigits(9);


console.log("\n#######   EXERCICE 3  #####\n\n");


function welcome(firstname = "john", lastname = "doe"){
    console.log("Bonjour " + firstname + " " + lastname);
}

welcome();
// aucune modification du resultat lors du changement de parametre de la fonction.
// john doe remplace automatiquement l'absence de parametre appeler dans la fonction.


console.log("\n#######   EXERCICE 4  #####\n\n");


function isAdult(age){
    if (age >= 18){
        console.log("Welcome to the site");
    }
    else{
        console.log(false);
    }
}

isAdult(18);
// on a décidé que ce serai true pour un adulte car si aucun parametre est passé dans l'appel de la fonction elle renvoie false par defaut.


console.log("\n#######   EXERCICE 5  #####\n\n");


var day = new Date();
var year = day.getFullYear();

function birthYear(age){
    if (age > 0){
        console.log(year - age);
    }
    else{
        console.log("No age given");
    }
}

birthYear(34);


console.log("\n#######   EXERCICE 6  #####\n\n");


var user = {
    "firstname": "John",
    "lastname": "Doe",
    "age": 42,
    "job": "dev"
}

function identityCard(user){
    for (var key in user) {
        console.log(key + " : " + user[key]);
    }
}

identityCard(user);