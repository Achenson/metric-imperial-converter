/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

//http://localhost:3000/api/convert?input=5kg

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");
// app parameter will be the app in server.js
module.exports = function(app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function(req, res) {
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);

    var spellOutInit =convertHandler.spellOutUnit(initUnit);
    var spellOutReturn = convertHandler.spellOutUnit(returnUnit);

    var toString = convertHandler.getString(
      initNum,
      spellOutInit,
      returnNum,
      spellOutReturn
    );

    if (
      !(
        initUnit === "kg" ||
        initUnit === "lbs" ||
        initUnit === "L" ||
        initUnit === "gal" ||
        initUnit === "mi" ||
        initUnit === "km"
      ) &&
      typeof initNum === "undefined"
    ) {
      res.json({string: "invalid number and unit"});
    } else if (
      !(
        initUnit === "kg" ||
        initUnit === "lbs" ||
        initUnit === "L" ||
        initUnit === "gal" ||
        initUnit === "mi" ||
        initUnit === "km"
      )
    ) {
      res.json({string: "invalid unit"});
    } else if (typeof initNum === "undefined") {
      res.json({string: "invalid number"});
    } else {
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: toString
      });
    }
  });
};
