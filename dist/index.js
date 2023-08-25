"use strict";
// Basic types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "hello";
//let age: number
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
// tuple
let person = [1, "Brad", true];
// tuple array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"]
];
// Union: let a variable to hold more than one type
let pid;
pid = 22;
// Enum: changes the default index of the object
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
