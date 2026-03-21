const user={
    username:"shipra",price:999,
    messgae:function(){
        console.log(`hi ${this.username},welcome!`)
        console.log(this);
    }
        
}
//user.messgae()
user.username='shipra dimri'
//user.messgae()
//console.log(this);
/*
function chai(){
    let user="shipra"
    console.log(this.user);
} //we cannot use this in function
chai()

*/

 const chai= ()=> {
    let user="shipra"
    console.log(this);
} 
//chai()
//const addtwo=(num1,num2)=>{
  //  return num1+num2
//}
//const addtwo=(num1,num2)=> num1+num2

//const addtwo=(num1,num2)=> (num1+num2)
const addtwo=(num1,num2)=> ({name:"shipra",srname:"dimri"})


console.log(addtwo(3,4))
