// iterators:

// In JavaScript an iterator is an object which defines a sequence and potentially
// a return value upon its termination.

// Specifically, an iterator is any object which implements the Iterator protocol by having a next()
//method that returns an object with two properties:
// generating a custom iterator:

// Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well.
// For instance, strings are also iterable.
const myArray = ["apple", "grapes", "oranges", "guavava"];
function fruitsIterator(values) {
  let idx = 0;
  // we will return an object
  return {
    next: function () {
      if (idx < values.length) {
        // we will return the elow object
        return {
          value: values[idx++],
          done: false,
        };
      } else {
        // we will return the below object with only done
        {
          done: true;
        }
      }
    },
  };
}

const fruits = fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
// returns done: true;
console.log(fruits.next());

/* To make the range iterable (and thus let for..of work) we need to add a method to the
object named Symbol.iterator (a special built-in symbol just for that).
1. When for..of starts, it calls that method once (or errors if not found). The method must
return an iterator – an object with the method next .
2. Onward, for..of works only with that returned object.
3. When for..of wants the next value, it calls next() on that object.
4. The result of next() must have the form {done: Boolean, value: any} , where
done=true means that the iteration is finished, otherwise value is the next value.*/

// Here’s the full implementation for range with remarks:

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5
let range = {
  from: 1,
  to: 5,
};
// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with this iterator, asking it for next values
  return {
    current: this.from,
    last: this.to,
    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

//---calling an iterator explicitly---------

let str = "Hello";
// does the same as
// for (let char of str) alert(char);
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}
