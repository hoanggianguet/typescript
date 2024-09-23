import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
// const sorter = new Sorter([10, 3, 4, -11]);
// sorter.sort();
// console.log(sorter.collection);

const numberCollection = new NumberCollection([10,2,3,4,1]);
// const sorter = new  Sorter(numberCollection);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharactersCollection('XaaabyY');
// const sorter = new Sorter(characterCollection);
characterCollection.sort();
console.log(characterCollection)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-19);
linkedList.add(5);


// const sorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
