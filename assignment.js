// let list= document.querySelectorAll('[data-ns-test]');
// console.log(list);
// let sum=0;
// Array.from(list).forEach(function(elem){
//     //console.log(elem);
//     // console.log(elem.innerText);
//     sum+= Number(elem.innerHTML);
//     //console.log(sum);
// })
// console.log(sum);
// let newRow= document.createElement('td');
// newRow.setAttribute('data-ns-test','grandTotal');
// newRow.innerText=`grandTotal: ${sum}`;
// console.log(newRow);
// document.getElementsByTagName('table')[0].appendChild(newRow);


//---------uselessPara---------\

// let uselesspara= document.getElementById('useless-paragraph')
// console.log(uselesspara);
// function toggleVisibility(){

//     if(uselesspara.style.visibility=='visible'){
//         uselesspara.style.visibility="hidden";
//     }
//     else {
//         uselesspara.style.visibility="visible";
//     }
// }

//---add 2 numbers--------
// var text1 = document.getElementById("Text1");
// var text2 = document.getElementById("Text2");

// function add_number() {
//    var first_number = parseFloat(text1.value);
//    if (isNaN(first_number)) first_number = 0;
//    var second_number = parseFloat(text2.value);
//    if (isNaN(second_number)) second_number = 0;
//    var result = first_number + second_number;
//    document.getElementById("txtresult").value = result;
// }

//---add 2 numbers gentle variation

// let num1;
// let num2;
// //let elem2= document.getElementById('num2')
// function assign(e){
//     // console.log();
//      num1=document.getElementById('num1').value;
//      num2=document.getElementById('num2').value;
//     //  console.log(num1)
//     //  console.log(num2)
// }
// // console.log(elem1.value);
// function add(){ 
//     document.getElementById('result').value= Number(num1)+Number(num2);
// }

// let count=0;
// let div=document.getElementById('box');
// div.addEventListener('mouseover',function(){
    
//     if(count%2==0){
//         div.style.transform='rotate(-180deg)'
//     }
//     else{
//         div.style.transform='rotate(180deg)'
//     }
//     console.log(count);
//     // if(div.style.transform) 
// })

//---------youtube like button problem-------

// let count=0;
// let likes= document.getElementById('counter');
// function increase(){
//     count++;
//     likes.innerText=count;
// }
// function decrease(){
//     if(count>0){
//         count--;
//     }
//     likes.innerText=count;
// }

//--------grocery list--------
// let count=0;
// function calcTotal() {
//     let list= document.querySelectorAll('[data-ns-test]');
//     count++;
// console.log(list);
// let sum=0;
// Array.from(list).forEach(function(elem){
//     //console.log(elem);
//     // console.log(elem.innerText);
//     sum+= Number(elem.innerHTML);
//     //console.log(sum);
// })
// let newRow= document.createElement('tr');
// newRow.innerHTML=`<td>Grand Total</td><td data-ns-test="grandTotal">${sum}</td>`;

// let elem=document.getElementsByTagName('tbody')[0]; 
// if(count>1){
//     elem.replaceChild(newRow,elem.lastChild);
// }
// else{
//     elem.appendChild(newRow);
// }
// }


//---------sending a request and understanding the promises

//---via callback functions
// console.log('file');
// function fetchReques(url,callback){
//     const xhr= new XMLHttpRequest();
//     xhr.open('GET',url,true);
//     xhr.onload=function(){
//         if(xhr.status===200){
//             callback(xhr.responseText)
//         }
//         else{
//             console.log('error occured')
//         }
//     }
//     xhr.send();
// }
// function callBack(e){
//    console.log(e);
// }
// fetchReques('dm.html',callBack);


//----doing the same thing with the promises

// function fetchRequest(url){
//     return new Promise(function(res,rej){
//     const xhr= new XMLHttpRequest();
//     xhr.open('GET',url,true);
//     xhr.onload=function(){
//         if(xhr.status===200){
//             // callback(xhr.responseText)
//             res(this.responseText);
//         }
//         else{
//             // console.log('error occured')
//             rej('error occured');
//         }
//     }
//     xhr.send();

//     })
// }
// console.log(fetchRequest('dom.html'))
// fetchRequest('dom.html').then(e=>console.log(e))



//------promise----
// function promiseMe(time, data) {
//     // return the output using return keyword
//     // do not console.log it
// 	// setTimeout(function(){
// 	// 	return new Promise(function(res){
// 	// 		res(data);
// 	// 	})
// 	// },time);
//     return new Promise(function(res){
//         setTimeout(res(data),time);
//     })
// }
// promiseMe(200,'hi').then(e=>console.log(e));


//------------form submit-----------






//------text highlighter------------
// let input= document.getElementById('paragraph-input');
// let wordCount= document.getElementById('words-counter');
// let ignoreCase= document.getElementById('ignore-case')
// document.querySelector('input').value+ document.getElementById('year').value
// document.getElementById('button').addEventListener('click',function(e){
//        e.preventDefault();
//        let url= document.getElementById('url').innerText;
//        let name= document.querySelector('input').value;
//        let year= document.getElementById('year').value;
//     //    url+= `?name=${document.querySelector('input').value}&year=${document.getElementById('year').value}`;
//         if(name!=''&& year!=''){
//             url+=`?name=${name}&year=${year}`;
//         }
    
//         else if(name=='' && year!=''){
//             url+=`?year=${year}`
//         }
//         else if(year==''&& name!=''){
//             url+=`?name=${name}`
//         }
//        document.getElementById('url').innerText=url;
// })


//----------to do list
// console.log(document.querySelector('.todo-button'));
// document.querySelector('.todo-button').addEventListener('click',function(e){
//     e.preventDefault();
//     console.log(e);
//     console.log('fired')
//     let newTask= document.createElement('li');
//     let taskName= document.querySelector('input').value;
//     if(taskName!=''){
//         newTask.innerHTML=`${taskName}<br><button onclick="handleComplete(e)">Completed</button ><button onclick="handleDelete(e)">Delete</button>`
//     }
//     console.log(newTask);
//     document.querySelector('ul').appendChild(newTask);
// })

// // document.querySelector('.todo-container').addEventListener('click',function(e){
// //     let elem= e.target;
// //     if(elem.classList.contains('')){
// //         elem.removeEventListener()
// //     }

// // })

// function handleComplete(){
//     console.log('hola')
//     console.log();


// }

// function handleDelete(e){

//     // why e is not defined here? 
//     console.log(e);
//     console.log('delete fired')
//     // let element= e.target;
//     console.log(e.target);
//     element.parentElement.remove();
// }


//-------------------------------
const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);


function deleteCheck(event) {
    // console.log(event.target)
    const item = event.target;

    if (item.classList[0] === 'trash-btn') {
        // console.log("deleted")
        item.parentElement.remove()
    }

    if (item.classList[0] === 'complete-btn') {
        // item.parentElement.classList.toggle('completed')
        // console.log(item.previousSibling)
        item.previousSibling.classList.toggle('completed')

    }

}

function addTodo(event) {
    // preventing the default behaviour
    event.preventDefault();
    // console.log('added todo');
    // console.log(todoList);

    if (todoInput.value !== '') {
        // new todo div
        const divTodo = document.createElement('div');

        // new todo
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item')
        newTodo.innerText = todoInput.value;
        // complete button
        const completedButton = document.createElement('button')
        completedButton.innerText = 'Completed'
        completedButton.classList.add('complete-btn')
        // delete button
        const removeButton = document.createElement('button')
        removeButton.innerText = 'Remove'
        removeButton.classList.add('trash-btn')
        // add to newtodo
        divTodo.appendChild(newTodo);
        divTodo.appendChild(completedButton);
        divTodo.appendChild(removeButton);
        // adding newtodo to ul
        todoList.appendChild(divTodo);
        todoInput.value = '';
    }

}