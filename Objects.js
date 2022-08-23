// objects are the non primitive datatypes which can store multiple values in js
// syntax: 
let obj={
    name: 'saurabh',
    position: 'developer',
    hobby: function(){
        console.log('loves watching test cricket')

    },
    organization: {
        name: 'amazon',
        field: 'e-commerse'
    }
}

//====Cloning a object==============

// to make a clone we have to loop through and assign all the keys in the clone because objects are pass by reference entities.
// using the for loop.
let clone={};
for (let key in obj) {
    clone[key] = obj[key];
 }
 console.log(clone);


//-----using the Object.assign method

let clone2= Object.assign({},obj);

// syntax for clone
// Object.assign(dest, [src1, src2, src3...])



//---using spread operator----------
// assign and spread operator creates shallow copy, i.e if there is a object within the object, the copy created as well as the original object points at same place.
let clone3= {...obj};
// clone3 and obj both points to same organization.


//----------- using JSON----------
// it creates deep copy. i.e the object within the object points to the diff object too
let clone4= JSON.parse(JSON.stringify(obj));

//  clone3 and obj both points to diff  organization.
// let boj2={...obj};
// console.log(obj);
// boj2.organization.name='monu';
// boj2.name='monu';
// console.log(boj2);