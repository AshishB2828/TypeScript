let userName:string = "Hello";
let myNumber:number = 2;
let myRegex:RegExp = /foo/;

const names:string[] = userName.split(" ");
// OR
const myVals:Array<string> = userName.split(" ");



//interface 
interface Person {
    firstName:string,
    lastName:string
}

const myPerson:Person ={
    firstName:"As",
    lastName:"B"
};

//map

const ids: Record<number, string> ={
    10:"a",
    11:"b"
};

ids[13] = "o";