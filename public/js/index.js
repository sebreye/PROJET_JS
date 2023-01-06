import * as CLASS from "./module/boss.js"
let Lilith = new CLASS.Boss('Lilith', 100, 100)
console.log(Lilith,CLASS.Soron, CLASS.Chronos);

import * as GUERRIER from "./module/guerrier.js";
let guerrier = new GUERRIER.Guerrier('', 0, 0, 0)
console.log(guerrier);

import * as MAGE from "./module/mage.js";
let mage = new MAGE.Mage('', 0, 0)
console.log(mage);

import * as ARCHER from "./module/archer.js";
let archer = new ARCHER.Archer('', 0, 0)
console.log(archer);