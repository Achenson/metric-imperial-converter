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

    result = myNumber;

    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    let regExp = /[a-zA-Z]/;

    let whereToSlice = input.search(regExp);
    
    let myUnit = input.slice(whereToSlice);
    console.log("TCL: myUnit", myUnit)

    result = myUnit;

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
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    

    



    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}
//exports is an object 
// https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
module.exports = ConvertHandler;
