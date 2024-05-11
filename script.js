// function range(){
//     var len = document.getElementById("length").value
//     document.getElementById("length-value").innerHTML = len
// }
// function generate(){
//         var len = document.getElementById("length").value
//         document.getElementById("length-value").innerHTML = len
        
//         // symbols...............!!
//         var simbol = document.getElementById("specialsCb").checked
//         // small.................!!
//         var small = document.getElementById("lowercaseCb").checked
//         // capitals..............!!
//         var cap = document.getElementById("uppercaseCb").checked
//         // number................!!
//         var count = document.getElementById("digitsCb").checked
        
//         var capitals = "ASDFGHJKLQWERTYUIOPZXCVBNM"
//         var lower = "asdfghjklqwertyuiopxcvbnm"
//         var num = "1234567890"
//         var sym = "!@#$%^&*()_" 
//         var password = "";
//         var newPass = "";
        
//         for (var i = 0; i < len; i++){
//             if (count === true && simbol === true && small === true && cap === true){
//                 var pass1 = Math.floor(Math.random() * num.length)
//                 var pass2 = Math.floor(Math.random() * sym.length)
//                 var pass4 = Math.floor(Math.random() * lower.length)
//                 var pass5 = Math.floor(Math.random() * capitals.length)
//                 password += num[pass1] + sym[pass2] + lower[pass4] + capitals[pass5]
//             }
            
//             else if (count === true && simbol === true && small === true){
//                 var pass1 = Math.floor(Math.random() * num.length)
//                 var pass2 = Math.floor(Math.random() * sym.length)
//                 var pass4 = Math.floor(Math.random() * lower.length)
//                 password += num[pass1] + sym[pass2] + lower[pass4]
//             }
//             else if (count === true && simbol === true && cap === true){
//                 var pass1 = Math.floor(Math.random() * num.length)
//                 var pass2 = Math.floor(Math.random() * sym.length)
//                 var pass4 = Math.floor(Math.random() * capitals.length)
//                 password += num[pass1] + sym[pass2] + capitals[pass4]
//             }
//             else if (cap === true && simbol === true && small === true){
//                 var pass1 = Math.floor(Math.random() * capitals.length)
//                 var pass2 = Math.floor(Math.random() * sym.length)
//                 var pass4 = Math.floor(Math.random() * lower.length)
//                 password += capitals[pass1] + sym[pass2] + lower[pass4]
//             }
//             else if (count === true && cap === true && small === true){
//                 var pass1 = Math.floor(Math.random() * num.length)
//                 var pass2 = Math.floor(Math.random() * capitals.length)
//                 var pass4 = Math.floor(Math.random() * lower.length)
//                 password += num[pass1] + capitals[pass2] + lower[pass4]
//             }
//             else if (count === true && simbol === true){
//                 var pass1 = Math.floor(Math.random() * num.length)
//                 var pass2 = Math.floor(Math.random() * sym.length)
//         password += num[pass1] + sym[pass2]
//     }
//     else if (count === true && cap === true){
//         var pass1 = Math.floor(Math.random() * num.length)
//         var pass2 = Math.floor(Math.random() * capitals.length)
//         password += num[pass1] + capitals[pass2]
//     }
//     else if (count === true && small === true){
//         var pass1 = Math.floor(Math.random() * num.length)
//         var pass2 = Math.floor(Math.random() * lower.length)
//         password += num[pass1] + lower[pass2]
//     }
//     else if (small === true && simbol === true){
//         var pass1 = Math.floor(Math.random() * lower.length)
//         var pass2 = Math.floor(Math.random() * sym.length)
//         password += lower[pass1] + sym[pass2]
//     }
//     else if (small === true && cap === true){
//         var pass1 = Math.floor(Math.random() * lower.length)
//         var pass2 = Math.floor(Math.random() * capitals.length)
//         password += lower[pass1] + capitals[pass2]
//        }
//        else if (simbol === true && cap === true){
//         var pass1 = Math.floor(Math.random() * sym.length)
//         var pass2 = Math.floor(Math.random() * capitals.length)
//         password += sym[pass1] + capitals[pass2]
//     }
//        else if(count === true){
//         var pass = Math.floor(Math.random() * num.length)
//         password += num[pass]
//        }
//        else if(simbol === true){
//            var pass = Math.floor(Math.random() * sym.length)
//             password += sym[pass]
//         }
//         else if(cap === true){
//             var pass = Math.floor(Math.random() * capitals.length)
//             password += capitals[pass]
//         }
//         else if(small === true){
//             var pass = Math.floor(Math.random() * lower.length)
//             password += lower[pass]
//         }
//     }
//     if(password.length > len){
//               for(var j = 0; j < len; j++){
//                 var pass3 = Math.floor(Math.random() * password.length)
//                 newPass += password[pass3]
//             }
//               }
//     else{
//         newPass = password
//     }          
//         document.getElementById("password").value = newPass
// }