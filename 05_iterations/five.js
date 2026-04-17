const coding=["js","py","java"];
coding.forEach(function  (val){
//console.log(val);

})
coding.forEach((val)=>{
    //console.log(val);
})
//function printMe(val){
    //console.log(val);

//coding.forEach(printMe);
coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})
const myCoding=[
    {
        name:"js",
        type:"frontend"
    },
    {
        name:"py",
        type:"backend"
    },
    {
        name:"java",
        type:"backend"
    }
]
myCoding.forEach((item)=>{
    console.log(item.name);
})
/*
for each
1. forEach is a method that is used to iterate over an array.
2. forEach is a higher-order function that takes a callback function as an argument and executes that callback function for each element in the array.
3. forEach does not return a new array, it simply executes the callback function for each element in the array.

for of
1. for of is a loop that is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
2. for of is a simpler and more concise way to iterate over iterable objects compared to for in loop.
3. for of does not work with objects, it only works with iterable objects.
*/

