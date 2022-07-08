//---------- event loop:
// basically it has 3 parts, call stack, callback queue,
// js puts all the async tasks in the queue, then proceeds and run the sync tasks first in stack,
// then it puts async tasks back in stack once it is done with all the sync tasks.
// vsit js9000.app for the visualization

// const { reject } = require("async");

// so event loop is bascially phenomenon of managing the the syn and asyn tasks as written above in detail.

//--async tasks
//---------- callback functions
/*
1) functions are first class citizens in js, the function we pass into another function and then call it, is called callback function.

2) due to callback we can do asyn things in js
*/
// ex of callback function
// function x(y){
//     y();
// }
// x(function y(){
//     console.log('hello');
// })
// we should not block our main thread.
// the vent listener functions are also callback functions
// we use closure for data hiding.

//------scope with event listners---
// suppose you have button, it stores how many times its clicked
/*
one solution is to use the global variable, the other is to use closures for data hiding;

*/
//
// function attachEventListner(){
//     let count=0;
//     document.getElementById('click me').addEventListener('click',function(){
//         console.log(++count);
//     });
// }
// attachEventListner();

//-----garbage collection and remove eventListners
/*
1) the event listners form closures which end up consuming a lot of memory, so it is neccessary to remove eventlistners to free up memory.
if we remove the event listner, all the variables attached to it will be garbage collected.
*/

//-----web Apis---------
/*
 1) set timeout{attaches a timer to code};
 2) Dom apis{ ex all document.methods}
 3) fetch{getting things from server}
 4) local storage{ storage access on browser}
 5) location{ the url we get}
 # these all are the features of the browser
 # these all are present in global object in window, which are accessible
*/
//---fetch api, promise---
/*
1) fetch is a web api, which is used to make netwirk calls.
2) this registers the callback functions in the web api's environment
3) Once we get the data from the server, 
//--------microtask Queue---
1) it has higher priority than callback queue, i.e its content is executed first
2) the callback function of FETCH api is pushed into microtask queue

3) things in microtask queue wait till the call stack is empty. once it is empty, things are pushed into it.
4) the callback functions from promises come and mutation from dom, into the microtask queue
5) all other apis such as dom setimeout go into the callback queue.
*/

//---------Starvation------
// when the microtask queue has a lot of work in it and it deosnt lest the callback fn in callback queue execute is called as starvation.

// console.log(5);
// function callBack(x){
//   let a= x();
//   console.log(a);
//   console.log(5);
// }
// callBack(function(){
// let x= setTimeout(function(){
// return 5;
// },1000);
// return x;
// })

function x() {
  let count = 5;
  let y = setTimeout(() => {
    count++;
  }, 1000);
  // console.log(y);
  console.log(count);
}
// x();
// x();

//----syncronous vs asyncronous task--------
/*
sync: the execution happens line by line in order

Async: Asynchronous programming is different. To make it simple, when JavaScript identifies asynchronous tasks, it'll simply continue the execution of the code, while waiting for these asynchronous tasks to be completed.
# example of ordering 2 thngs at the coffee shop

higher order function: the function having anothe function as argument(apne ander) or return function  is called the higher order function.

ex code for syn callback */
function synCallBack(callBack) {
  callBack();
  console.log("higher order function called");
}
function callBack() {
  console.log("callback funtion called");
}
// synCallBack(callBack);

// arra.map..array.filter(function())..array.foreach(function())....these are sync callbacks only

// ex code for asyn callback
function asynCallback(callBack) {
  setTimeout(() => callBack(), 2000);
  console.log("higher order called first");
}
function asyncCall() {
  console.log("asyn call made");
}
// asynCallback(asyncCall);

/*
Asyncallback: i'll call ack once im done

Callbacks are old-fashioned ways of writing asynchronous JavaScript because as soon you have to handle multiple asynchronous operations, the callbacks nest into each other ending in callback hell

Promise: I promise a result
Promises are used to handle asynchronous operations in JavaScript and they simply represent the fulfillment or the failure of an asynchronous operation.

Thus, Promises have four states :

pending: the initial state of the promise

Promises are used to handle asynchronous operations in JavaScript and they simply represent the fulfillment or the failure of an asynchronous operation.

Thus, Promises have four states :
fulfilled: the operation is a success
rejected: the operation is a failure
settled: the operation is either fulfilled or settled, but not pending anymore.
*/
// syntax for creating the promise:
/*let apiResult = new Promise((resolve, reject) => {
  let foundApi = false;
  if (foundApi) {
    resolve("api found");
  } else {
    reject("api not found");
  }
}); */
// apiResult.then((e) => console.log(e)).catch((e) => console.log(e));

// writing a real world example here
let data = (url) => {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function () {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject("An error occured!");
      }
    };
    request.send();
  });
};
// data("https://swapi.dev/api/people/1")
//   .then((e) => console.log(e))
//   .catch((e) => console.log(e));

/*
Aysnc and await: i'll execute when im ready.

1) Async always returns a promise.
2) await keyword makes a asyncronous call, the control goes out from the function to do another tasks, and comes back once the things are done.

*/
async function doSomething(url) {
  console.log('inside the function')
  let responce= await fetch(url)
  console.log('in between 2 promises');

  let data= await responce.text();
  console.log('after both the calls')
  return data;
}
doSomething('functions.html').then(e=>console.log(e))
console.log('after promises');


(function(){

  setTimeout(()=> console.log(1),2000);
  
  console.log(2);
  
  setTimeout(()=> console.log(3),0);
  
  console.log(4);
  
  })();
  // op: 2,4 3 1 

  // add 2 numbers

  function add(a){
    return function(b){
      return a+b;
    }
  }

  add(function(){
    
  })

  let num= add(3)(4);