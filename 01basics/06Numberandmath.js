const score=100.12
console.log(score);
console.log(new Number(score)); //[Number:100.12]
console.log(new String(score));//[String:'100.12']
let newscore=score;
console.log(newscore.toString().length);
console.log(newscore.toFixed(2));
console.log(newscore.toPrecision(4));
//************math*********
console.log(Math);
console.log(Math.abs(-4));//4
console.log(Math.round(3.8));//4
console.log(Math.floor(3.8));//3
console.log(Math.ceil(3.2));//4

console.log((Math.random()*10)+1);//will give value between 1 to 10
console.log(Math.floor((Math.random()*10)+1));//will give value between 1 to 10 without decimal
const min=10,max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));//will give value between 10 to 20 without decimal





