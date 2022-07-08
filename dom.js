// window object is global object in js
// window.alert('hello sonu');
// console.log(window.prompt('destroy your comp'));
// let a= window.document;

// a= location;
// a=innerHeight
// a=innerWidth
// a=scrollX;
// a=scrollY;
// a=location.toString();
// a=window.history;
// a=window.URL
// console.log(a);
// saves the history of the browser, just when the broser is on the web, not all the history.

//------tut2-----

// this provides a html collection in a, its not exactly an array, but very musvh like that.
// let a= document.all;
// a=document.body;
// a=document.links;

// printing an html collection
// Array.from(a).forEach(function(element){
//     console.log(element);
// })

// console.log(a);

//----tut3-------
// selectors
// 2 types: single element, multiple element selector
// let elem= document.getElementById('items');
// console.log(elem);
// console.log(elem.className);
// console.log(elem.childNodes);
// console.log(elem.parentNode);
// console.log(elem.innerHTML);
// elem.innerHTML="changed html";
// console.log(elem.innerHTML);

// query selector 
// let b= document.querySelector('#items');
// b=document.querySelector('.top');
// console.log(b);

// multiple 

// let multiple= document.getElementsByClassName('item-group-list');
// multiple=document.getElementsByTagName('div');
// console.log(multiple);

//------tut4---------
// let elem= document.querySelector('.item-list');
// console.log(elem);
// // childnodes includes the texts, newlines cooments etc
// console.log(elem.childNodes);
// // children includes only elements
// console.log(elem.children);

// nodetypes:
/*
1 element
2 attribute
3 text
*/
// getting the children of children
// console.log(elem.children[0].children);
// firstchild and firstelementchild, similarly lastchld and lastelementchild
// console.log(elem.firstChild);
// console.log(elem.firstElementChild);
// console.log(elem.childElementCount);

// siblings: nextsibling or nextelementsibling(just selsects elements)
// console.log(elem.firstElementChild.nextElementSibling);


//------tut5----------
// we will study how to make and break the elements here: 
// let element= document.createElement('li');
// element.className='created-elem';
// element.id='newElem';
// element.setAttribute('title','myTitle');
// // diff bw innertext and innerhtml : we can put tags in innerhtml while  we cannot so that in case of innertext;
// element.innerHTML='this is created by js'
// console.log(element);
// // now insert in in the ul
// let ul= document.getElementsByClassName('item-list')[0];
// console.log(ul);
// // new element has been appended
// ul.appendChild(element);
// we can do this also by using doxument.creatTextNode('i am created');
// replacing a perticular element
// let elem= document.getElementsByClassName('item-list')[0].firstElementChild;
// elem.replaceWith(element);
// let ul= document.getElementsByClassName('item-list')[0];
// console.log(ul);
// replaceChild
// ul.removeChild(document.getElementById('2'));
// console.log(ul.getAttribute('id'));
// console.log(ul.getAttribute('class'));
// ul.removeAttribute('id');
// console.log(ul.getAttribute('id'));

// Quiz creat an a tag with google in it with href of the google
// let elem= document.createElement('a');
// elem.setAttribute('href','google.com');
// elem.innerText='google';
// console.log(elem);


//---------tut6----------
//topics: events
// let heading= document.getElementById('heading');
// the most important clickevent
// heading.addEventListener('click',function(event){
    
//     console.log('i am clicked');
//     // gives the target element
//     console.log(event.target);
//     // gives the element's id
//     console.log(event.target.id);
//     // gives id name
//     console.log(event.target.className);
//     // how far from the target
//     console.log(event.offsetX);
// })

//--------tut7-----------
// further knowledge abut the events
// preventDefault() avoids the default behaviour 
//  let btn= document.getElementById('submit');
// console.log(btn)
// btn.addEventListener('dblclick',fun1)
// function fun1(e){
//     console.log('thanks for dbl click',e);
// }
// btn.addEventListener('click',fun2)
// function fun2(e){
//     e.preventDefault()
//     console.log('thanks ',e);
    
// }

// mouseleave, mouseenter

// btn.addEventListener('mouseenter',function(){
//     console.log('you entered')
// })
// btn.addEventListener('mouseleave',function(){
//     console.log('you exited')
// })

// mousemove: gets triggred on the mouse move 

// btn.addEventListener('mousemove',function(e){
//         // console.log(e.offsetX,e.offsetY)
//          console.log('you movedMouse')
//      })


//-----event bubbling,capturing, deligation----

// these are 2 methods of the event propagation

//---bubbling--
//--propagation from child to parent
//---capturing---
//--propagation from child to parent--

// syntax: 

// addEventHandler('click',function(){},useCapture(true/false))

// document.getElementById('grandParent').addEventListener('click',()=>{
//     console.log('grandparent clicked')
// },true)
// document.getElementById('parent').addEventListener('click',()=>{
//     console.log('parent clicked')
// },true)
// document.getElementById('child').addEventListener('click',()=>{
//     console.log('child clicked')
// },true)
// the third parameter means in which cycle the event will be covered.
// by defaults the checking starts from the capturing
// see this example:
// document.getElementById('grandParent').addEventListener('click',()=>{
//     console.log('grandparent clicked')
// },true)
// document.getElementById('parent').addEventListener('click',()=>{
//     console.log('parent clicked')
// },false)
// document.getElementById('child').addEventListener('click',()=>{
//     console.log('child clicked')
// },true)

// op: grandParent, child, Parent
// explanation: first the grandParent is triggred, cause it says it is capturing, then when it comes to the parent, it says it won't be covered in capturng cycle, then it goes to child which says it will be in capturing phase, the the parent i triggred in bubbling phase

//---stoping propagation----
// syntax: e.stopPropagation
// document.getElementById('grandParent').addEventListener('click',(e)=>{
//     console.log('grandparent clicked')
//     e.stopPropagation();
// },true)
// document.getElementById('parent').addEventListener('click',()=>{
//     console.log('parent clicked')
// },true)
// document.getElementById('child').addEventListener('click',()=>{
//     console.log('child clicked')
// },true)

//------event deligation--------
// it a method of event handling
//The idea is that if we have a lot of elements 

// handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
document.getElementById('container').addEventListener('click',(e)=>console.log(e.target));























