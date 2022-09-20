let user = {
  firstname: "saurabh",
  lastname: "sharma",
  display: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};
function printfullname() {
  console.log(this.firstname + " " + this.lastname);
}

/* user.printfullname(); */

let user2 = {
  firstname: "sachin",
  lastname: "tendulkar",
};
user.display.call(user2);
// now how if want to print the fullname, name2 doesn't have any methd.
//------------call-------------
// call is simply the function borrowing.
/* printfullname.call(user); */

// we can have more parameters in function and the arguments could be passed from call.

function printDetails(hometown) {
  console.log(this.firstname + " " + this.lastname + " from " + hometown);
}
// the first parameter is the referance
printDetails.call(user, "delhi");

//----------------- apply:------------------
// just diff is that we do pass the second argument as list
printDetails.call(user, ["delhi"]);

//---------- bind method:------------------
// it gives you the copy which ca be invked later
// ex:

let copy = printDetails.bind(user2, "bihar");
copy();
