// whats json? 

// json is a data format for storing and transporting data.

// data types supported by json:
// string, number, null, boolean, object
let user={
    name: 'sonu',
    age: 23,
    location: 'haryana',
}
let json= JSON.stringify(user);
console.log( typeof json);
console.log( typeof JSON.stringify([1,2,3]))

// JSON.parse: to convert to a object from the string

let str="[1,2,3]";
console.log( typeof JSON.parse(str));
// any random string cn not be passed here, it has to be either array or an object.
