console.log("Hello, World!");

const userName = "Ivona";
const favoriteAnimal = "Snow Leopard";
const userAge = 18;

console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);
console.log("My age is " + userAge);

alert("Tervetuloa hieoulle nettisivylleni!");

const visitorName = prompt("Mikä on nimesi?");
console.log(visitorName);
console.log("Hei " + visitorName + "! Tervetuloa JavaScriptin pariin!");

const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");
console.log("Moi, " + visitorName + "! Sinun lempieläimesi on " + visitorFavoriteAnimal + ".");
if (visitorFavoriteAnimal === favoriteAnimal) {
  console.log("Mahtava maku! Tämä on minunkin lempieläin!");
} else {
  console.log("Mahtavaa! Sinun lempieläimesi on " + visitorFavoriteAnimal + ".");
}

const visitorAge = prompt("Kuinka vanha olet?");

if (visitorAge >= 18) {
  console.log("Olet aikuinen.");
} else {
  console.log("Olet alle 18-vuotias.");
}

function greetUser(name) {
  console.log("Hei " + name + "!");
}

greetUser("Ivona");
greetUser('Lidia');
greetUser('Ekaterina');