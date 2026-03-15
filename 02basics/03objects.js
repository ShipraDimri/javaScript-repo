//singleton
//Object.create

//object literal 
/*
const person={name: "John","srname":"Doe",[mysym]:"key1", age: 30, city: "New York",marks:[40,80,90],ispass:true};
console.log(person.name);
console.log(person["name"]);
console.log(person["marks"])
console.log(person["srname"]);
console.log(person.srname);//if space is there in key then we have to use bracket notation,then use dot notation
*/

const mysym=Symbol("key1")
const person={name: "John","srname":"Doe",[mysym]:"key1", age: 30, city: "New York",marks:[40,80,90],ispass:true};

console.log(typeof mysym);
console.log(person);

console.log(person[mysym]);
person.greeting=function(){
    console.log("Hello");
}
person.greeting2=function(){
    console.log(`How are you,${this.ispass}`);
}

console.log(person.greeting());
console.log(person.greeting2());


