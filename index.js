// var a=5;
// var b=5;

// function x(){
//     console.log('x called');
//   y();
// }
// function y(){
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log('y called')
// }
// // x();


// // let list ={
// //     value: 1,
// //     next: {
// //         value: 2,
// //         next: {
// //             value: 3,
// //             next:{
// //                 value: 4,
// //                 next: null
// //             }
// //         }
// //     }
// // };

// // function printList(list){
// //     if(list==null){
// //         return;
// //     }
    
// //     printList(list.next);
// //     console.log(list.value);
// // }
// // printList(list);
// // let a2= document.all
// // console.log(a2);
// // console.log(scrollX)
// // console.log(scrollY)

// // let links= document.links;
// // console.log(links);
// // for(let i of links){
// //     // if(links[i].indexOf(saurabh)!=-1){
// //     //     console.log(links[i]);
// //     // }
// //     links[i].innerhtml
// // }

// let user={
//     firstname: 'saurabh',
//     lastname: 'sharma',
    
//     }
//     function printfullname (){
//      console.log(this.firstname+" "+this.lastname);
//     }
    
//     /* user.printfullname(); */
    
//     let user2={
//     firstname: 'sachin',
//     lastname: 'tendulkar',
//     }
//     // now how if want to print the fullname, name2 doesn't have any methd.
    
//     // call is simply the function borrowing.
//     /* printfullname.call(user); */
    
//     // we can have more parameters in function and the arguments could be passed from call.
    
    
//     function printDetails (hometown){
//      console.log(this.firstname+" "+this.lastname+'from'+this.hometown);
//     }
    
//     // printDetails(user,'delhi');


//     // console.log(Array);

//     // function Array(){
//     //     this.name='array';
//     //     this.datatype='linear'
//     // }
//     // let arr= new Array();
//     // console.log(arr);

//     let array= [1,2,3];
//     // console.dir(array);
//     // Array.prototype.map=function(){
//     //     console.log('newly added function');
//     //    };
//   //  console.dir(array);   
// //    array.map(); 

// let obj={
//     name:'sonu'
// }

// // obj.__proto__=null
// // console.dir(obj);

// Array.prototype.myMap= function(callback){
//     let arr=[];
//     for(let i=0; i<this.length; i++){
//       arr.push(callback(this[i],i,this))
//     }
//     return arr;

//   }
//  let myArr= array.myMap(function(e){
//     return 2*e;
//  }) 
// //  console.log(myArr);

//  Array.prototype.myFilter= function(callback){
//     let arr=[];
//     for(let i=0; i<this.length; i++){
//       if(callback(this[i],i,this)){
//         arr.push(this[i]);
//       }
      
//     }
//     return arr;
//   }

// let filter= array.myFilter(function(elem){
//     return elem>1;
// })  
// // console.log(filter);


// function findCost(n) {
//   // write code here
//   // do not console.log the answer
//   // return answer as a number
//   let groups= Math.ceil(n/3);
//   if(groups==1){
//       return n;
//   }
//   return groups*groups+findCost(n-groups);

// }

// console.log(findCost(7));



// feching data.

async function getData(){
  const container= document.querySelector('.container');
  // const tableBody= document.querySelector('tbody');
  let data = await  fetch('https://jsonplaceholder.typicode.com/todos/');

  let temp= await data.json();
  let html='';
  temp.forEach(function(elem){
    const {userId, id,title,completed}=elem;
    html+=`<h3>userId:${userId}</h3><p>id: ${id}</p><p>title: ${title}</p><p>Completed: ${completed}</p>`
  })

  container.innerHTML=html;
  console.log(container);
  // container.innerHTML= temp;
  // console.log();
}

// getData();

// search, detele, modify, 


// [1,2,1,3,1,4,5,1,1,6]
// the most frequent number in the array.
let arr=  [1,2,2,3,2,4,5,1,1,6];
let obj={

};

for(let key of arr){
  // console.log(key);
  // avoid using .key here.
  if(obj[key]===undefined){
    obj[key]=1
    
  }
  
  else{
    // console.log(obj[key]);
    obj[key]=obj[key]+1;
    

  }
}
console.log(obj);

// 1: 3

let maxKey=0; maxval=-Infinity;
for(let key in obj){
  if(obj[key]>maxval){
    maxval=obj[key];
    maxKey=key;
  }
}
console.log(maxKey,maxval);
