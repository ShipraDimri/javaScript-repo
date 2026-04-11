const useremail=[]
if(useremail){
    console.log("User is logged in");//empty array is truthy value
                                    //empty string is falsy value
                                    //-ve zero is falsy value
                                    //NULL and Undefined are falsy value
                                    //Nan is falsy value
}
else{
    console.log("User is not logged in");
}
//truthy values
//"0" truthy value, "false" truthy value," " " truthy value, [] truthy value, {} truthy value
//function(){} truthy value that is empty function
if(useremail.length===0){
    console.log("array is empty");
}
const emptyobj={}
if( Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

//Nullish coalescing operator(??): null undefined
let val1;
//val1=5??10;
//val1=null??10;
//val1=undefined??10;
val1= null??15??undefined??10;
console.log(val1);

//Ternary operator
const price=100;
price>100?console.log("Price is greater than 100"):console.log("Price is less than or equal to 100");
[]?console.log("[] is the truthy value"):console.log("[] is the falsy value");