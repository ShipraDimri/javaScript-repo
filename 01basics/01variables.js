const accountId=2510011985
let accountEmail="shipru.18@gmail.com"
var accountPassword="12345"
/*
prefer not to use var because of issue in block scope and functional scope
*/
accountCity="jaipur"
// accountId=2510011986 //not allowed
accountEmail="hc@geu.in"
accountPassword="001"
accountCity="dehradun"
let accountState;
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
