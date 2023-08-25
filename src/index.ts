// Basic types

let id: number = 5
let company: string = "Traversy Media"
let isPublished: boolean = true
let x: any = "hello"
//let age: number

let ids: number[] = [1,2,3,4,5]

let arr:  any[] = [1,true,"hello"]

// tuple

let person: [number,string,boolean] = [1,"Brad", true]

// tuple array

let employee: [number,string] []
employee = [
    [1,"Brad"],
    [2,"John"],
    [3,"Jill"]
]

// Union: let a variable to hold more than one type

let pid: string | number
pid = 22

// Enum: changes the default index of the object

enum Direction1 {
    Up = 1,
     Down, Left, Right
}
console.log(Direction1.Left)

// object

const user: {
    id:number, name: string
} = {
    id: 1, name: "Brad"
}