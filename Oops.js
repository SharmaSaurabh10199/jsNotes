//----------this keyword--------------
// this refers to the current instance.

// use cases of this keyword:
/*
1) by default, this refers to the global object windwo, in strict mode it is undefined

2) this refers to a new instance in constructer:
   */
  function Car(color, model){
    this.color=color;
    this.model=model;
    this.displayName()=function(){
      console.log(`${this.color} ${this.model}`)
    };

  }

// 3) this refers in call bind and apply: 
function outer(item){
  console.log(item);
   console.log(this);
   function inner(_item){
   // prints the obj
   console.log(_item);
   // it should br printing the obj itself, 
   console.log(this,);
   
   }
   // it will be undefined if sent by name item
   inner.call(this,'temp1');
  }
  let obj3={
    name: 'sonu'
    }
    outer.call(obj3,'temp');
      









//-----Singleton objects---------
//  objects created using object literal are singletons,
//This means when we made a change in an object,
// it affects the object entire script
// objects are stored in key value pair
let car = {
  name: "maruti",
  speed: 200,
  model: 2020,
  run: function () {
    console.log("car is running");
  },
};

// creating a constructer:

//function constructor lets us have multiple instances of that object. If the change is made to one instance, 
//it will not affect other instances. As we know that the constructor is essentially 
//a function that acts as a blueprint for creating objects. A convention for declaring constructors is
//always to capitalize its function name.
function GeneralCar(name, speed) {
  (this.name = name),
    (this.topspeed = speed),
    (this.run = function () {
      console.log(`${this.name} is running`);
    });
    // this is a private prprty which can not be accesed by the instance.

    let convertible=false
    // accesing a private property 
    this.accessPrivateproprty= function(){
      return this.convertible;
    }
}
let car1 = new GeneralCar("nissan", 180);
console.log(car1);

//------------------Prototype and prototypal inheritance--------
// obj prototype is kind of a funtionality provided by defalut with every object.

// __proto__ is the actual object what is used in th elookup chain to resolve methods
// prototype is the object that is used to build __proto__
 
// overriding the functions of array
Array.prototype.map = function() {
       console.log('this is generate x')
   }
 // now the map function of Array is overridden here  

 let obj={
  name:'sonu'
}
// sets all its protypes to null, nothisng can be accessed now.
obj.__proto__=null

// var arr = [1,2,3]
// // console.dir(arr)

// // console.dir(arr)
// console.log(arr.__proto__ === Array.prototype)
// // console.dir(arr.__proto__.__proto__)


// console.log(Array.prototype)
// array method has been overridden
// Array.prototype.map = function() {
//         console.log('asdjkahkdjh')
// }
// console.log(arr.__proto__.__proto__ === Object.prototype)
// // console.dir(arr.__proto__.__proto__.__proto__)
// 


//-------pollyfils----------

// it is basically overriding your own methods


//-------implementing own map-------
let array=[1,2,3]
Array.prototype.myMap= function(callback){
  let arr=[];
  for(let i=0; i<this.length; i++){
    arr.push(callback(this[i],i,this))
  }
  return arr;

}
let myArr= array.myMap(function(e){
  return 2*e;
}) 
console.log(myArr);
// op: [1,2,3];


//----implementing our own filer-----
Array.prototype.myFilter= function(callback){
  let arr=[];
  for(let i=0; i<this.length; i++){
    if(callback(this[i],i,this)){
      arr.push(this[i]);
    }
    
  }
  return arr;
}

let filter= array.myFilter(function(elem){
  return elem>1;
})  
console.log(filter);


// we can add functions to the prototype of our objects.
  let arr=['sonu','monu'];
  let obj={
    name: 'sonu',
    age: 23,
    run: function(){
        console.log('sonu runs');
    }
  }
  //  an object has the access to various propertis which we have not even defined.
  // def: js attaches an object to your object/function  which has the access to various properties 
  //which get accesed by the obj we created with the help of that object.
  // it sees the properties first in the object, if not present, it goes into the 
  // properties of its prototye simiilarly the chan goes on

  // Summary:
  /*
  In JavaScript, all objects have a hidden [[Prototype]] property that’s either another
object or null .


We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to
be covered soon).

The object referenced by [[Prototype]] is called a “prototype”.
If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript
tries to find it in the prototype.

Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a
data property, not a setter).

If we call obj.method() , and the method is taken from the prototype, this still
references obj . So methods always work with the current object even if they are inherited.

The for..in loop iterates over both its own and its inherited properties. All other key/valuegetting
methods only operate on the object itself
  */
   //--------prototype chaning 
   let animal={
    name: 'animal',
    legs: 4,
    walk: function(){
        console.log('i do walk');
    }
   }
   // inheritance attained.
   let dog={
    breed: 'german',
    __proto__: animal,
   }
   console.log(dog);

   //---------Classes in js-----------
   class Employee{
    constructor(name,experience,division){
      this.name=name;
      this.experience=experience;
      this.division=division;

    }
    //methods
    walk(){
      return `${this.name} walks`;
    }
    // static methods: these methods can be used without the object
    // this cannot be used with the static method.
    static add(a,b){
      return a+b;
    }
   }
   sonu= new Employee('sonu',56,'divsion');
  //  calling the properties of the obj
   console.log(sonu.walk());
   // calling the static method
   Employee.add(3,4);

   //-------- inheritance with the classes----
   // inheritance is done with the use of extents keyword[[[]]]
   class Programmer extends Employee{
    constructor(name,experience,division,language){
      super(name,experience,division);
      this.language=language;
    }
    favLang(){
      if(this.language=='python'){
        return 'python'
      }
      else {
        return 'javascript';
      }
    }
    static multiply(a,b){
      return a+b;
    }
   }
   console.log(Programmer.multiply(3,8));
   
