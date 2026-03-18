function sayMyname(){
    console.log("My name is Lucas");
}
sayMyname();
function sumTwoNumbers(number1,number2){
   // console.log(number1+number2);
   return number1+number2;
    
}
let r=sumTwoNumbers(3,'5');
console.log(r);
function loginUserMessage(username='sam'){ //default parameter
    if(!username){
        console.log("Please enter a valid username");
        return;
    }
    return `Welcome back, ${username}`;
}
console.log(loginUserMessage());
