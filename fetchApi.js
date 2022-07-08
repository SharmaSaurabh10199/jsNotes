// fetch api: it is an alternative to the xml get request api.

// it is an asynchronous task


//---------getting a text data from the fetch api
// console.log('file');
// let myBtn= document.getElementById('fetchBtn');
// let content= document.get

// function getData(url){
//     // fetch url returns one promise, and this response.text() return another promise for the data
//     fetch(url).then((response)=> response.text()).then((e)=>console.log(e));
// }
// getData('khatu.txt');
// console.log('khatu shyam is loading')

// ---------getting a json data from a url

let myBtn= document.getElementById('fetchBtn');
let content= document.get

function getData(url){
    // fetch url returns one promise, and this response.text() return another promise for the data
    fetch(url).then((response)=> response.json()).then((e)=>console.log(e));
}

// getData('https://reqres.in/api/users');

//------post reques using fetch api--------
// post req takes url as well as one more parameter to post
// function postData(){
//     url = "khatu.txt";
//     user={"name":"sonu99","salary":"123","age":"23"};
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: user
//     }
//     fetch(url,params).then(res=>res.json()).then(res=>console.log(res));
// }

function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}
postData();