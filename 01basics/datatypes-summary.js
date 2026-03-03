//premitive data types
//7types:string,number,boolean,null,undefined,symbol,BigInt
/*const score=10
const scoreValue=10
const isLogged=true
const OutsideTemp=null
console.log(score===scoreValue);
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

//Reference(non-premitive)
//array,objects,functions
const arr=["shipra","dog"]
let obj={
    name:"shipraDimri",rollNo: 49
}
const MYfunction=function(){
    console.log("hello ships");
    
}
console.log(typeof(MYfunction));
console.log(typeof(obj));
console.log(typeof arr);
console.log(typeof anotherId);*/

//STACK(premitive) and HEAP(non-premitive) memory
let myName="shipra"
let anotherName=myName
anotherName="dimri"
console.log(myName);
console.log(anotherName);
let details1={
    name:"shipra",
    rollNo:49
}
let details2=details1;//same reference
details2.name="dimri"
console.log(details1.name);//dono me chnge ho jaega kyuki dono same reference point kr rhe h
console.log(details2.name);

