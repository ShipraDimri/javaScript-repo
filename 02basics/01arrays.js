const arr=[1,2,3,4,5]
const myarr=new Array(1,2,3,4,5)
console.log(arr[6]);//undefined
console.log(myarr[0]);
/*arr.push(6);
console.log(arr);
arr.pop()
console.log(arr);

*/
/*
arr.unshift(1);//add element at the beginning of the array
console.log(arr);
arr.shift();//remove element from the beginning of the array
console.log(arr);

console.log(arr.includes(-1)); //includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const newarr=arr.join();
console.log(newarr);//data will be converted to string and separated by comma
*/

console.log("A",arr);
const newarr1=arr.slice(1,3)//do not include 3rd index
console.log(newarr1);
console.log("B",arr);
const newarr2=arr.splice(1,3)//include 3rd index
console.log(newarr2);
//difference between slice and splice is that slice does not change the original array but splice changes the original array
console.log("C",arr);
//orginal array is changed because splice method is used

