
let input = '5km';

var result;

let regExp = /[a-zA-Z]/;

let whereToSplit = input.search(regExp);



let myNumber = input.slice(0, whereToSplit);
console.log("TCL: myNumber", myNumber)

let myUnit = input.slice(whereToSplit);
console.log("TCL: myUnit", myUnit)

let testnNum = 5/3;
console.log("TCL: testnNum", testnNum)

let testStr = '55/44';
console.log("TCL: testStr", testStr)

let evalRegEx = /^\d+\/?\d+$/;

evalRegEx.test(testStr);
console.log("TCL: evalRegEx.test(testStr);", evalRegEx.test(testStr));

let myParseNum = eval(testStr);
console.log("TCL: myParseNum", myParseNum)

















