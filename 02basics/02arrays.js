const hero=['Srk','sk'];
const heroine=['Ash','kat'];
/*
hero.push(heroine);
console.log(hero[2][0]);//Ash
 const newHeroArray = hero.concat(heroine);
console.log(newHeroArray);//[ 'Srk', 'sk', 'Ash', 'kat' ]
*/
const merged=[...hero,...heroine]
console.log(merged);
 const nestedarr=[1,2,[3,4],[5,[6,7]]]
 console.log(nestedarr.flat(Infinity));//[ 1, 2, 3, 4, 5, 6, 7 ]
 console.log(Array.isArray('shipra'));//false
 console.log(Array.from('shipra'));//[ 's', 'h', 'i', 'p', 'r', 'a' ]
 console.log(Array.from({name:'shipra'}));//interesting result [  ]
 let s1='shipra';
 let s2='dimri'
 console.log(Array.of(s1,s2));//[ 'shipra', 'dimri' ]
 
 

 