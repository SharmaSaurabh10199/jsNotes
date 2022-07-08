console.log("regex");
// this is reg expression literal.

// Regex are used to validate the froms, or the strings in a short way.

// A regular expression is a sequence of characters that forms a search pattern.

// The search pattern can be used for text search and text replace operations.

//======function expressions=============
let reg = /sonu/;
reg=/Sonu/i; // it is for the case insensitive
reg= /sonu/g; //global, for more than one match.
console.log(reg);
console.log(reg.source);
// functions to match expressions
let s = "this is sonu sonu sonu";
// 1. exec()- function returns an object for a match or null for no match.
// we can use multiple exec with global flag
let result = reg.exec(s);
if (result) {
//   console.log(result);
//   console.log(result.input);
}

// ----2- test()---: returns true or false;

result = reg.test(s); // returns true if the reg is contained in s
// console.log(result);
//------3- match()--: this will return array of results or null
// let res3= reg.match(s); // wrong
let res3= s.match(reg);

// this extracts all the values in s for the regex.
// if used with the groups, returns the array of all the matches.
console.log(res3);

//-------4--search()--: returns the index of first match, else -1;

let res4= s.search(reg);
// console.log(res4);

//-------5--replace()--: returns new replaced string with all the replacements:
// use global flag for all the replacements, else first match will be replaced.
let res5= s.replace(reg,"MONU");
// console.log(res5);



//=========MetaCharacterSymbol===========
let regex= /^harry/;  // ^ signifies,if the string starts with 
let str="harry is a good boy";
// console.log(regex.test(str));
//---endsWith($)---
regex=/boy$/ // this means the strin ends with this regex.
// console.log(regex.test(str));

//---(.)---
let any= /ha.ry/;     // all are matching apart from .
// console.log(any.test(str));

//------(*)-------
any=/h*rry/;   // the begining and the start are h and rry of the string, there can be anthing in between
// console.log(any.test(str)); 

//---Character Set-[]---------
regex= /h[abcdef]rry/; // any character occuring from em.
regex= /h[a-z]rry/      // can be any character from a to z
regex= /h[^aty]rry/      // can not a t and y.
regex= /h[^aty]rry[pq][0-9]/   // can be more than one time
// console.log(regex.test(str));
// we can have as many characters as we want

//------Quantifiers-{}----------

regex= /har{2}y/ // implies exactly 2 times r.

regex= /har{0,2}y/ // r can occur 0, 1 or 2 times.

//------Groupings---()---------

regex= /(har){2}/; // 2 times har



//========Shorthand character classes======

regex= /\w rry/ // word character: _ or aplphabet or numver
regex= /\w+d1r/; // \w+ means one or more word charcters
regex= /\Wbhai/ // \W means non word characters, ex space.
regex= /\W+bhai/ // \W+ means more then one non word character
regex= /number \d/ // \d means one digit
regex= /number \d+/ // \d+ means more than one digit
regex= /number \D/ // \D means non digit numbers
regex= /number \D+/ // \D+ means more than one non digit numbers
// \s  = used for space
// \s+ = more than one white space
// \S  = non white space
// \S+ = more than one white space

//=====Assertions=======

regex= /h(?=a)/; // he ke baad y hona chahiye
regex= /h(?!y)/; // h ke baad y nhi hona chahiye


