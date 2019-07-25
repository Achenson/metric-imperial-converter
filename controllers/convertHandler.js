/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;

    let regExp = /[a-zA-Z]/;

    let whereToSlice = input.search(regExp);
    
    let myNumber = input.slice(0, whereToSlice);
    console.log("TCL: myNumber", myNumber)

    if(myNumber.length === 0) {
      result = 1;
    } else if (
      
      !/^\d+(\.\d+)?(\/\d+(\.\d+)?)?$/.test(myNumber)
    ) {
      // for 6/4 etc. to work
      result = undefined;
    } else {
      result = eval(myNumber);
    }

    

    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    let regExp = /[a-zA-Z]/;

    let whereToSlice = input.search(regExp);
    
    let myUnit = input.slice(whereToSlice);
    console.log("TCL: myUnit", myUnit)

    if(!([
      "gal",
      "L",
      "mi",
      "km",
      "lbs",
      "kg",
    ].includes(myUnit))) {
      result = undefined;

    } else {
      result = myUnit;
    }

    

    return result;


  };
  
  this.getReturnUnit = function(initUnit) {
    var result;

    switch(initUnit) {
      case 'gal':
        result='L';
        break;
      case 'L':
        result='gal';
        break;
      case 'lbs':
        result='kg';
        break;
      case 'kg':
        result='lbs';
        break;
      case 'mi':
        result='km';
        break;
      case 'km':
        result='mi';
        break;

    }
    
    return result;
  };

  
  this.spellOutUnit = function(unit) {
    var result;

    switch(unit) {
      case 'gal':
        result='gallons';
        break;
      case 'L':
        result='liters';
        break;
      case 'lbs':
        result='pounds';
        break;
      case 'kg':
        result='kilograms';
        break;
      case 'mi':
        result='miles';
        break;
      case 'km':
        result='kilometers';
        break;

    }


    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch(initUnit) {
      case 'gal':
        result=initNum * galToL;
        break;
      case 'L':
        result=initNum / galToL;
        break;
      case 'lbs':
        result=initNum * lbsToKg ;
        break;
      case 'kg':
        result=initNum / lbsToKg;
        break;
      case 'mi':
        result=initNum * miToKm;
        break;
      case 'km':
        result=initNum / miToKm;
        break;

    }


    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    let fiveDecimals = Math.round(returnNum*100000)/100000;

    

    result = `${initNum} ${initUnit} converts to ${fiveDecimals} ${returnUnit}`

    return result;
  };
  
  //'3.1 miles converts to 5.00002 kilometers
  //http://localhost:3000/api/convert?input=5kg
}
//exports is an object 
// https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
module.exports = ConvertHandler;
