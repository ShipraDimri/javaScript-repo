 //=== checks both the values and its datatype
 //== checks only the value and it does type coercion

 const userlogged=true;
 const debitcard=true;
 const logeedinfromgoogle=true;
 const loggedinfromemail=false;
 if(userlogged&&debitcard&&2==2){
    //console.log("You can buy");
 }
 if(logeedinfromgoogle||loggedinfromemail){
    console.log("You can login");
 }