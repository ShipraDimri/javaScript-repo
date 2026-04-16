//for
for(let index=0;index<10;index++){
    const element=index;
    if(element==5){
        //console.log("5 is found");
    }
    //console.log(element);
    
}
for(let i=0;i<=3;i++){
    console.log(`outer loop value:${i}`);
    
    for(let j=0;j<=3;j++){
       // console.log(`inner loop value:${j}`);
       console.log(i+'*');
       
    }
}
let myArray=[1,2,3,4,5];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

//break and continue
for(let i=1;i<=20;i++){
    if(i===5){
        //break;
        break;
    }
    console.log(i);
}