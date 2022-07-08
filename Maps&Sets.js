// included in es6

//========Maps=========

// here we can use any type of key or value, unlike in objects we needed to have keys as string.

// syntax:
const myMap = new Map();

// creating vlues:

const key1 = "str",
  key2 = {},
  key3 = function () {};

// setting the map values
myMap.set(key1, "string");
myMap.set(key2, "blank obj");
myMap.set(key3, "empthy function");

// getting the values from the map
let val = myMap.get(key1);
val = myMap.get(key2);
console.log(val);

// get the size of the map

console.log(myMap.size);

// you can loop using for..of to get keys and values
for (let [key, val] of myMap) {
  console.log(key, val);
}

// get only the keys:

for(let key of myMap.keys()){
    console.log('key is',key);
}

// get only the values

for(let val of myMap.values()){
    console.log('valus is', val)
}

// using for each loop

myMap.forEach((val,key)=>{
    console.log('key is',key)
    console.log('value  is',val)
}
);

// converting map to an array:
// it gives us array of array
let myArray= Array.from(myMap);
console.log(myArray);

// form keys
let myKeysArray= Array.from(myMap.keys());

// from the values
let myValuesArray= Array.from(myMap.values());


//==========Sets================
// set stores unique values
// syntax
const mySet = new Set();

// adding vlaues to set

mySet.add(1);
mySet.add('1');
mySet.add(this);
mySet.add(this);
console.log(mySet);

// size
console.log(mySet.size);

// adding values from constructer

let mySet2= new Set([1,2,3,4,'sonu','monu']);
console.log(mySet2);

// has property
// returns true or flase, depending on if it contain the passed parameter
console.log(mySet.has(3));

// remove an element 

mySet.delete(1);

// for each oj set
mySet.forEach((key)=> console.log(key));

// for of loop in set
for(let item of mySet){
    console.log(item);
}

// converting set to an arrayu
let arr= Array.from(mySet);

// find the unique elements of the array

let array=[1,1,2,3,4,4,5];
let unique= new Set(array);
console.log(Array.from(unique));

// remove everything

mySet.clear();

// ==============Questions========
/*
1) Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr .
*/

function uniqueEle(arr){
    let set= new Set(arr);
    return Array.from(set);
}

/*
2)  Write a function aclean(arr) that returns an array cleaned from anagrams.


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
*/

function aclean(arr){
    let set= new Set();
    for(let item of arr){
        set.add(item.toLowerCase().split('').sort().join(''));
    }
    return Array.from(set);
}
console.log(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));


/*
3) We’d like to get an array of map.keys() in a variable and then do apply array-specific methods
to it, e.g. .push .
But that doesn’t work:
*/
let map = new Map();
map.set("name", "John");

let keys = map.keys();

// here map.keys returs an iterable, not an array. 
console.log(typeof keys);
// Error: keys.push is not a function
keys.push("more");


//=========WeakMaps and WeakSets======

//-------WeakMaps--------

/*WeakMap is Map -like collection that allows only objects as keys and removes them together
with associated value once they become inaccessible by other means. */


//------weakSets----------

/*
WeakSet is Set -like collection that stores only objects and removes them once they become
inaccessible by other means.
*/

/*
WeakMap and WeakSet are used as “secondary” data structures in addition to the “main”
object storage. Once the object is removed from the main storage, if it is only found as the key of
WeakMap or in a WeakSet , it will be cleaned up automatically.
*/
