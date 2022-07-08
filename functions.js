// function statment
function a() {
  console.log(3);
}
// function expression
var b = function () {
  console.log("b called");
};

// the major is that function statment are hoisted while function expression are treated just like a variable. b have undefined in it untill it is defined.

// ---------function declaration
// it is same as function statment

// -----------anonymous function
// functions without name,
// anonymous functions are used when the functions are used as value
// function statment needs a name in a function.
var b = function () {
  console.log("b called");
};

// named function
var b = function xyz() {
  console.log("b is called");
};

//-------- diff bw parameters and arguments
// parameters: values in the functions
// argument: whlile function call

//---------- first class functions:
// it is the ability of the functions to be treated like variables, ie functions can be passed as well as returned to or from a function.
function x(add) {
  console.log(add());
}
x(function () {
  console.log("added");
});

//----- Arrow functions:
function add(a, b) {
  return a + b;
}

// these are used with function expression, not with statment or declaration.
// multiple parameters
let addition = (a, b) => a + b;
// single parameters
let double = (n) => n * 2;
// withourt any parameters
let hello = () => console.log("hello");

// are the part of es6

// Callback functions:
// when a function is passed into parameters and called back later:
function x(y) {
  y();
}
x(function () {
  console.log("y called");
});
// here y is called after it is being passed to x.

// what is the importance?
// callback functions are very powerfull,it is used vastly in asynchromous js. as we know js is sigle threaded sycronous lang.
// settime out uses callback function to make it asynchrous:

// suppose one execution context is very heavy and takes a time, we could put it into wait using settimeour and let other statments execute.

//
