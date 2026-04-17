const arr=[1,2,3,4,"five"];
for (const num of arr) {
   // console.log(num);
}
const greeting="Hello World";
for (const element of greeting) {
    //console.log(element);
    
}

//Maps,unique values and js order me enter kiya wese hi rahega
const map=new Map();
map.set("IN","india");
map.set("US","United States");
map.set("UK","United Kingdom");
//console.log(map);
for (const [key, value] of map) {
   // console.log(key,"-", value);
}
const myObject={
    'game1':"cricket",
    'game2':"football",
    'game3':"hockey"
}
for (const [key,value] of myObject) {
    console.log(key,"-",value);
    
}