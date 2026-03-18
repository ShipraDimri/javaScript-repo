function addtoCart(val1,val2,...num1){
    return num1;
}
console.log(addtoCart(3,50,590));//[590]
const obj={
    username:"sam",price:999
}
function handleobject(anyobj){
    console.log(`user name is ${anyobj.username} and price is ${anyobj.price}`);
    
}
//handleobject(obj); 
handleobject({username:"john",price:1999});
const newarr=[1,2,3,4,5,6]
function acessingValues(getArray){
    console.log(getArray[2]);
}
//acessingValues(newarr);
acessingValues([10,20,30,40,50]);