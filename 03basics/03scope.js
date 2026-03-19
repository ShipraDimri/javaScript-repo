let a=300;
if(true){
    let a=100;
    console.log(a); //100
}
console.log(a); //300
//var is not recommended to use because of its global scope and hoisting issues
var x=500;
if(true){
    var x=200;
    console.log(x); //200
}
console.log(x); //200,because var is function scoped and not block scoped, it gets overwritten in the global scope.