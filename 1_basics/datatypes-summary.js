// Primitive Data Types

//7 types of data types in JavaScript are:String, Number, Boolean, Undefined, Null, Object, Symbol

const scor=100;
const scoceValue=100.5;

const isLoggedIn=true;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const id2=Symbol('123');

console.log(id===id2);

const bigNumber=9999999999999999n;
console.log(bigNumber);



//Reference Data Types (non-primitives) are: Array, Object, Functions,

const heroes=['Ironman','Thor','Hulk','Captain America'];
let myObj={
    name:'Ironman',
    age:40,
}

const myFunction=function(){
    console.log("Hello World!");
}
console.log(typeof id);