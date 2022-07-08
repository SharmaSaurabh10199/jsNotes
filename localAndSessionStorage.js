console.log('local storage')
// addas a key value pair inside local stroage
localStorage.setItem('name','harry')
// to retrieve an item
let name= localStorage.getItem('name');
console.log(name);
// clears the local stroage
localStorage.clear();
// to remove a perticular item
localStorage.removeItem('name');

// array is not stored in a local storage, rather it is converted to a string and then stored.
let arr=['sonu','monu','harru'];
// here the array is being stored as strign by default
localStorage.setItem('names',arr);

console.log(localStorage.getItem('names'))
// now to retrieve the original array, we stringify it and parse, using json:
localStorage.setItem('nameInArr',JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem('nameInArr')));

//------session storage--------
// the storage vanishes from the browser once the broser is restatted.
sessionStorage.setItem('temp','sonu');
sessionStorage.getItem('temp');

let user={
    name: 'xyz',
    occupation: 'uber',
    function: function(){

    }
}
localStorage.setItem('obj',JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('obj')))

//------diff between local and session storage----
// the session storage is kinda temporary on the browser, once its restarted, it vanishes

