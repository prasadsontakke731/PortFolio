// function otpGenerate(){
//     const otpLength  = 4;
//     const otp = ""
//     for(let i=0;i<otpLength;i++){
//         otp = otp+Math.floor(Math.random()*9)
//     }
//     return otp
// }
// console.log(otpGenerate())
// const user = {
//     name:"prasad"
// }
// const user1 = {
//     name:"sanket"
// }
// const userToJson = JSON.stringify(user)
// const userToJson1 = JSON.stringify(user1)
// sessionStorage.setItem("user",userToJson)
// sessionStorage.setItem("user1",userToJson1)

var a = [1,2,3,4]
var b = a.forEach(function(value,index){
    console.log(index +":" + value);
})
var c = a.map((x)=> console.log(x*x))