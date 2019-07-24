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
    var toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    if (
      !(
        initUnit === "kg" ||
        initUnit === "lbs" ||
        initUnit === "L" ||
        initUnit === "gls" ||
        initUnit === "mi" ||
        initUnit === "km"
      ) &&
      typeof initNum === "undefined"
    ) {
      res.send("invalid number and unit");
    } else if (
      !(
        initUnit === "kg" ||
        initUnit === "lbs" ||
        initUnit === "L" ||
        initUnit === "gls" ||
        initUnit === "mi" ||
        initUnit === "km"
      )
    ) {
      res.send("invalid unit");
    } else if (typeof initNum === "undefined") {
      res.send("invalid number");
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
