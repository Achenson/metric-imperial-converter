
let input = '123KM'

var result;

let regExp = /[a-zA-Z]/;

let whereToSplit = input.search(regExp);



let myNumber = input.slice(0, whereToSplit);
console.log("TCL: myNumber", myNumber)

let myUnit = input.slice(whereToSplit);
console.log("TCL: myUnit", myUnit)














