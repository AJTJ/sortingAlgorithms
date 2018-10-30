// let { expect } = require("chai");

const assert = require("assert");

let { maxProduct } = require("./problem1");
let { isAnagram } = require("./problem2");

it("maxProduct works", function() {
  let numbers = [3, -29, 44, -800, 333, -700];
  // expect(maxProduct(numbers)).equal(560000);
  assert.strictEqual(maxProduct(numbers), 560000);
});

it("anagram detection working", function() {
  let str1 = "schoolmaster";
  let str2 = "theclassroom";
  // expect(isAnagram(str1, str2)).equal(true);
  assert.strictEqual(isAnagram(str1, str2), true);
});
