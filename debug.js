
let input = '123KM'

var result;

let regExp = /[a-zA-Z]/;

let whereToSplit = input.search(regExp);



let myNumber = input.slice(0, whereToSplit);
console.log("TCL: myNumber", myNumber)

let myUnit = input.slice(whereToSplit);
console.log("TCL: myUnit", myUnit)

let testnNum = 5/3;
console.log("TCL: testnNum", testnNum)

let testStr = '5/3';
let myParseNum = eval(testStr);
console.log("TCL: myParseNum", myParseNum)

















