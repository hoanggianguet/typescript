"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// const sorter = new Sorter([10, 3, 4, -11]);
// sorter.sort();
// console.log(sorter.collection);
const numberCollection = new NumbersCollection_1.NumberCollection([10, 2, 3, 4, 1]);
// const sorter = new  Sorter(numberCollection);
numberCollection.sort();
console.log(numberCollection.data);
const characterCollection = new CharactersCollection_1.CharactersCollection('XaaabyY');
// const sorter = new Sorter(characterCollection);
characterCollection.sort();
console.log(characterCollection);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-19);
linkedList.add(5);
// const sorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
