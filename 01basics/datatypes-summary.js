//premitive data types
//7types:string,number,boolean,null,undefined,symbol,BigInt
const score=10
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
console.log(typeof anotherId);

