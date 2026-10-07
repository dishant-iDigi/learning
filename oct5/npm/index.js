import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

var sillyname = generateName();
var hero = randomSuperhero();

console.log("Hi my name is " + sillyname);
console.log("I am " + hero);