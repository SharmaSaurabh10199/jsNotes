
//-----this is a example of getting a website.
let fetchBtn=document.getElementById('fetchBtn');
console.log(fetchBtn.innerText);
console.log(typeof fetchBtn)
fetchBtn.addEventListener('click',fetchPage)

function fetchPage(){
    console.log('clicked');
    // object creation. 
    // xml is a web api to get or post the data
    const xhr= new XMLHttpRequest();
    // open the object, get request
    xhr.open('GET','dom.html',true);
    // while the page is getting the info, we can show the spinner for this while in our website
    xhr.onprogress= ()=> console.log('in progress')

    // when responce is ready
    xhr.onload =function(){
        // 200 is the ok status from the html 
        if(xhr.status===200){
            console.log(xhr.responseText);
        }
        // some error might have occured
        else{
            console.log('some error occred')
        }
    }
    console.log('clicked ')
    // send the request, tabhi hi kaam hoga
    xhr.send();
    // here we are done will go up in console cus we have put a asyn request.
    console.log('we are done')
}