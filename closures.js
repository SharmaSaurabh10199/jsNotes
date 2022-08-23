// closures 

// function along with its lexical scope bundled together is called closure

/*  A closure is a function having access 
to the parent scope, even after the parent function has closed.
lexical scope is just a part of closure. */

// functions can be passed as parameters, and also could be returned.

/* function x(){
var a=7;
function y(){
console.log(a);
}
return y;
}

var z= x();
z(); */
// op=7;
// y is returned, its not just the function, it is the closure i.e the lexical scope along with the function

// interview output questions:


/* function x(){
var a=7;
function y(){
console.log(a);
}
a=100;
return y;
}

var z= x();
z(); */
// op: 100
// the y returned have the reference here to a rather than the vale

// further tweak
function z(){
 
    function x(){
    var a=7;
    function y(){
    console.log(a);
    }
    a=100;
    y();
    }
    
    x();
     }
     z();
     
     // it remembers the scopes of its parents parent too.
     
     
     // interview Questions: 
     
     // Ques1
     /* function x(){
     var i=1;
     setTimeout(function(){
     console.log(i);
     },3000);
     }
     x(); */
     // prints 1 after 3s
     
     // Ques 2
     
     /* function x(){
     var i=1;
     setTimeout(function(){
     console.log(i);
     },3000);
     }
     console.log("hello");
     x(); */
     // the callback function stores it somewhere, attaches a times of 3s, and then after this times, it puts back into the execution stack.
     // js doesn't wait, execution keep going on
     
     // Ques 3
     // print 1 after 1 sec, 2 after 2 sec, 3 after 3 sec etc
     
    /* function x(){
    for(var i=1; i<=5; i++){
    setTimeout(function (){
    console.log(i)
    },i*1000);
    }
    }
    x(); */
    // op is 6 everytime: 
    // explanation: the closure of settimeout has referance to i which doesn't stop executing heance all the is stores the latest value 6 in it.
    
    // correct solution: 
    /* function x(){
    for(let  i=1; i<=5; i++){
    setTimeout(function (){
    console.log(i)
    },i*1000);
    }
    }
    x(); */
    // here since the let is block scoped, a new copy is kept everytime.
     // can we do it using the var only?
     function x(){
    for(var i=1; i<=5; i++){
    function close(i){
    setTimeout(function (){
    console.log(i)
    },i*1000);
    }
    close(i);
    }
    }
    x();