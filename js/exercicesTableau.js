//EXERCICE 1 :

var items = new Array();            // ceci declare que items est un tableau par le biai de la méthode array().
console.log(items);

items = [];                         // ceci declare que items est un tableau
console.log(items);

/*
items = ();                         // ceci declenche une ereur car les parenthese ne declare rien, ni tableau ni variable valide
console.log(items);
*/

items = ["a","b"];                  // ceci declare 2 nouvelle variable dans le tableau "a" en position 0 et "b" en positoin 1 du tableau.
console.log(items);



//EXERCICE 2 :

var items = ["premier élément", "deuxième élément", "troisième élément", "quatrième élément"]; 
console.log(items);                     // oui resultat attendu
console.log(items[1]);                  // il affiche "deuxieme élément" car un tableau commence par l'index 0.
console.log(items[3]);                  // il affiche "quatrième élément" car le premier index du tableau est 0, il faut ajouté 1 pour avoir la valeur affiché.
console.log(items[0]);                  // pour affiché "premier élément" on doit utilisé l'index 0.



//EXERCICE 3 :

var player = ["John", "Doe", 34, true];
console.log(player);                        //oui résultat attendu.
console.log(player[0]);                     // Affichage du prénom du joueur.
console.log(player[1]);                     // Affiche le nom du joueur.
console.log(player[0] + " " + player[1]);   // Affiche prénom + espace + nom.
player[2] += 6;                             // Ajoute 6 a la variable player[2] et la réassigne a cette variable.
console.log(player[2]);                     // affiche la nouvelle valeur de la variable player[2].
console.log(player[3]);                     // affiche le boolean de player.

// cette notation est pas adequate pour de grand nombre de variable.



//EXERCICE 4 :

var player = {
    "firstname": "John",
    "lastname" : "Doe",
    "age": 34,
    "isAdulte": null
}

console.log(player);                                            // oui résultat attendu.
console.log(player["firstname"]);                               // affiche le prénom.
console.log(player["lastname"]);                                // affiche le nom.
console.log(player["firstname"] + " " + player["lastname"]);    // affiche prénom + espace + nom.
player["age"] = 40;
console.log(player["age"]);

if (player["age"] >= 18) {                                      // faut bien s'amusé un peut :) :)
    player["isAdulte"] = true;                              
}
    else {
        player["isAdulte"] = false;
    }

console.log(player["isAdulte"]);                                // affiche s'il est majeur.

// L'avantage de cette annotation est de pouvoir retrouver facilement les variables par un nom les définissant plus précisément.


//EXERCICE 5:

var car = {
    "type": "Clio",
    "brand": "Renault",
    "date": 2006,
    "color": "orange",
    "passengers": ["Mike","Claire","Anna","Louis"]
}

console.log(car); // affichage attendu.

console.log("Une " + car["brand"] + " " + car["type"] + " de couleur " + car["color"] + ", modèle " + car["date"] + " à été aperçue avec à son bord " + car["passengers"]);
// car a l'index passengers contient les 4 noms des passager.
console.log(car["passengers"][0]);
// le prénom du passager 1 s'affiche, les premier crochet font appel au tableau passengers quand au second crochet il font appel au tableau contenue dans le tableau passengers.
console.log("4 individus ont été aperçus à son bord: " + car["passengers"][3] + " " + car["passengers"][1] + " "  + car["passengers"][0] + " et "  + car["passengers"][2]);



//EXERCICE 6 :

var a = 14;
var b = 38;
var product = [];
console.log(a);
console.log(b);
console.log(product);
product.push(a);
product.push(b);
product[7] = 50;
console.log(product); // un tableau associatif dont l'index 0 et 1 sont rempli par les variables a et b et comporte 5 éléments vide avant la variable de l'index 7.