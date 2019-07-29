var chai = require("chai");
var assert = chai.assert;
var ConvertHandler = require("../controllers/convertHandler.js");
//!!!!
var convertHandler = new ConvertHandler();

describe("Function convertHandler.getNum(input)", function() {
  it("Whole number input", function() {
    var input = "32L";
    assert.equal(convertHandler.getNum(input), 32);
  });

  it("Decimal Input", function() {
    var input = "3.2L";
    assert.equal(convertHandler.getNum(input), 3.2);
  });

  it("Fractional Input", function() {
    var input = "3/2L";
    assert.equal(convertHandler.getNum(input), 3 / 2);
  });

  it("Fractional Input w/ Decimal", function() {
    var input = "3.3/2.2L";
    assert.equal(convertHandler.getNum(input), 3.3 / 2.2);
  });

  it("Invalid Input (double fraction)", function() {
    var input = "3/3/2";
    assert.notEqual(convertHandler.getNum(input), 3 / 3 / 2);
  });

  it("No Numerical Input", function() {
    var input = "";
    assert.equal(convertHandler.getNum(input), 1);
  });
});

describe("Function convertHandler.getUnit(input)", function() {
  it("For Each Valid Unit Inputs", function(done) {
    var input = ["gal", "L", "mi", "km", "lbs", "kg"];
    input.forEach(function(el) {
      assert.equal(convertHandler.getUnit(el), el);
    });
    done();
  });

  it("Unknown Unit Input", function(done) {
    var input = "adsflkj";
    assert.notEqual(convertHandler.getUnit(input), "adsflkj");
    done();
  });
});

describe("Function convertHandler.getReturnUnit(initUnit)", function() {
  it("For Each Valid Unit Inputs", function(done) {
    var input = ["gal", "L", "mi", "km", "lbs", "kg"];
    var expect = ["L", "gal", "km", "mi", "kg", "lbs"];
    input.forEach(function(ele, i) {
      assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
    });
    done();
  });
});

describe("Function convertHandler.spellOutUnit(unit)", function() {
  it("For Each Valid Unit Inputs", function(done) {
    //see above example for hint
    var input = ["gal", "L", "mi", "km", "lbs", "kg"];
    var expect = [
      "gallons",
      "liters",
      "miles",
      "kilometers",
      "pounds",
      "kilograms"
    ];
    input.forEach(function(ele, i) {
      assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
    });

    done();
  });
});

describe("Function convertHandler.convert(num, unit)", function() {
  it("Gal to L", function(done) {
    var input = [5, "gal"];
    var expected = 18.9271;
    assert.approximately(
      convertHandler.convert(input[0], input[1]),
      expected,
      0.1
    ); //0.1 tolerance
    done();
  });

  it("L to Gal", function(done) {
    var input = [5, "L"];
    var expected = 1.32086;
    assert.approximately(
      convertHandler.convert(input[0], input[1]),
      expected,
      0.1
    ); //0.1 tolerance
    done();
  });

  it("Mi to Km", function(done) {
    var input = [5, "mi"];
    var expected = 8.04672;
    assert.approximately(
      convertHandler.convert(input[0], input[1]),
      expected,
      0.1
    ); //0.1 tolerance
    done();
  });

  it("Km to Mi", function(done) {
    var input = [5, "km"];
    var expected = 3.10686;
    assert.approximately(
      convertHandler.convert(input[0], input[1]),
      expected,
      0.1
    ); //0.1 tolerance
    done();
  });

  it("Lbs to Kg", function(done) {
    var input = [5, "lbs"];
    var expected = 2.26796;
    assert.approximately(
      convertHandler.convert(input[0], input[1]),
      expected,
      0.1
    ); //0.1 tolerance
    done();
  });

  it("Kg to Lbs", function(done) {
    var input = [5, "kg"];
    var expected = 11.02311;
    assert.approximately(
      convertHandler.convert(input[0], input[1]),
      expected,
      0.1
    ); //0.1 tolerance
    done();
  });
});
