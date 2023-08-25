// Basic types
var id = 5;
var company = "Traversy Media";
var isPublished = true;
var x = "hello";
//let age: number
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, "hello"];
// tuple
var person = [1, "Brad", true];
// tuple array
var employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"]
];
// Union: let a variable to hold more than one type
var pid;
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
