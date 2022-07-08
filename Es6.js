// -----var, let and const
//-------- template literal
//---------rest and spread operators-------

//----Object destruction--------
let user = {
    name: {
        firstNmae: 'aviral',
        lastName: 'pandey'
    },
    occupation: 'developer'
}
// here this occupation is generated in global scope, we can console.log it.
let {occupation, name}= user;
// console.log(occupation)

// assigns the values of keys of these values in that object.
// simalarly in arry
let arr=[12,3];
let[x,y]=arr
// console.log(x,y)

// arrow functions: 

// properties:
//----behavious of this keyword in js
// valuse of this cannot be changed in js
// closest non arrow function ka this is arrow function ka this.

let obj5 = {
    name: 'aviral'
}

const outerFn = (item) =>  {
    console.log('1', this);
    const innerFn = function( _item) {
        console.log('2', this);
        const moreinnerFn = () => {
            console.log('3', this)
        }
        moreinnerFn()
    }
    innerFn.call(obj5, item)
}

// outerFn.call(obj5, 'param1')

// op: window, obj5, obj5.

//--------- rest operator

//-----arguments------
// this is kinds inbuilt keyword which is a collection, not exactly an array, it containes all the elements passed into function.

// arrow functions do not have this arguments propery.
function temp(x,y){
    console.log(x)
    console.log(y)
   console.log( arguments[0]);
}
// temp(1,2,4,5);


//------rest operator
// this arr is actually an array and conatains rest of the elements passed in arguments
function foo(x,y,...arr){
    console.log(x)
    console.log(y)
    console.log(arr)
}

foo(1,2,3,3,4,4,5,5)


