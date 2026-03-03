let myName="shipra"
let dob=18;
//console.log(myName+dob);
console.log(`hello my name is ${myName} and my dob is ${dob}`)
let str1=new String('hello')//object key and value deta hai
console.log(str1[0]);
console.log(str1.__proto__);

console.log(str1.length);
console.log(str1.indexOf('e'));
console.log(str1.substring(1,4));//ell
//in substring value we cannot use negative value,it will consider it as 0
console.log(str1.slice(-4,4));
let newstr=new String("   hello_world   ")
console.log(newstr.trim());
console.log(newstr.replace('_',''));//(what to replace,with what to replace)
console.log(newstr.includes('ol'));
console.log(newstr.split('e'));
