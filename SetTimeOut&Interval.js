// if we want some function to execute after some time, then we call is scheduling

//----SetTimeout---------

// allows us to run function once after the interval of time

// syntax: 

function executeLater(phrase,name){
    console.log(`${phrase} ${name}`);
}
// general syntax:
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2],
// arg1, ag2 are the arguments of function

 // wrong!
//setTimeout(sayHi(), 1000);
//  In
// our case the result of sayHi() is undefined (the function returns nothing), so nothing 

let timerid= setTimeout(executeLater,1000,'hello','john');

// cancelling with clearTimeOut

// let timerId1 = setTimeout();
// clearTimeout(timerId1);
// nothng happens after we cancel it.

//-------setInterval---------
// syntax
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// // All arguments have the same meaning. But unlike setTimeout it runs the function not only
// once, but regularly after the given interval of time.

// to stop the calls, we use clearInterval

let id= setInterval(()=>console.log('hi'),1000);
setTimeout(()=>{
    clearInterval(id);
},5000);

