const Elevator = require("./elevator.js");
const Person = require("./person.js");

const elevator = new Elevator();

const juan = new Person("Juan", 2, 5);
const luis = new Person("Luis", 1, 10);
const dom = new Person("Dominik", 4, 6);
const helena = new Person("Helena", 4, 1);
const torgeir = new Person("Torgeir", 9, 4);

elevator.start();
setTimeout(function() {
  elevator.call(juan);
}, 500);

setTimeout(function() {
  elevator.call(luis);
}, 500);

setTimeout(function() {
  elevator.call(dom);
}, 500);

setTimeout(function() {
  elevator.call(helena);
}, 500);

setTimeout(function() {
  elevator.call(torgeir);
}, 500);
