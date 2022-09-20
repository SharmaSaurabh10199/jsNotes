//-------------- diff between var and let.

/*
1) var is block scoped while the let is functional scope
2) The final salient difference between let / const and var is that if you access var before it's declared,
 it is undefined.
 But if you do the same for let and const, they throw a ReferenceError
3) var is accesble in the global windiw object while let we can access in that script scope.


//---------temporal dead zone----------
the time when the variables are in the scope but they are not declared;
//ex: 
{
 	// This is the temporal dead zone for the age variable!
	// This is the temporal dead zone for the age variable!
	// This is the temporal dead zone for the age variable!
 	// This is the temporal dead zone for the age variable!
	let age = 25; // Whew, we got there! No more TDZ
	console.log(age);
}
*/