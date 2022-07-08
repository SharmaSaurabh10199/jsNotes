//----- generators in js---------

// can generate the values on the fly, i.e whenever we want.
// generator syntax.

// use: suppose we have a lot of asyn calls,which take some good time, the we can use generator function so that we can call te next iteration whenever we want them.

function* numberGen(){
    let i=0;
    // yield 1;
    
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
    }

}



const gen= numberGen();
console.log(gen.next())

// gen.next() returns us an object, with value and done attribute, done represents the finish
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

console.loh(gen.next().value)
// returns only the value.