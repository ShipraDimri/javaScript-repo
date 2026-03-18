//const tinderUser = {}
const tinderUser=new Object();

console.log(tinderUser);
tinderUser.id="123abc";
tinderUser.name="John";
tinderUser.isLoggedIn=true;
//console.log(tinderUser);
const regularUser={email:"sam@gmail.com", fullname:{
    firstname:"Sam",
    lastname:"Smith"
}
}
//console.log(regularUser.fullname.firstname);
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj4={5:"e",6:"f"};
//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2,obj4);
obj3={...obj1,...obj2};
//console.log(obj3);

/*
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(regularUser.hasOwnProperty('email')); //true
*/

const course={coursename:'ssr',price:999,courseInstructor:'john'};
const {courseInstructor:instructor}=course;
console.log(instructor);
/*
{
name:"John",
age:25,
isLoggedIn:true
}

[
{},
{},
]

*/