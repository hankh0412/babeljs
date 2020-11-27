"use strict";

// 화살표 함수
var bar = function bar() {
  return console.log("bar");
}; // bar


console.log(Array.from([1, 2, 3], function (x) {
  return x + x;
})); // expected output: Array [2, 4, 6]