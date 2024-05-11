function range(){
    var len = document.getElementById("length").value
    document.getElementById("length-value").innerHTML = len
}
function generate(){
    var len = document.getElementById("length").value
    document.getElementById("length-value").innerHTML = len
        // symbols...............!!
        var simbol = document.getElementById("specialsCb").checked
        // small.................!!
        var small = document.getElementById("lowercaseCb").checked
        // capitals..............!!
        var cap = document.getElementById("uppercaseCb").checked
        // number................!!
        var count = document.getElementById("digitsCb").checked
        var capitals = "ASDFGHJKLQWERTYUIOPZXCVBNM"
        var lower = "asdfghjklqwertyuiopxcvbnm"
        var num = "1234567890"
        var sym = "!@#$%^&*()_" 
        var pass = "";
        var password = "";
        var emty  = "";
        var matchO = 0;
        for(var i = 0; i < 4; i++){
            matchO++
            if(simbol == true && matchO == 1){
               emty += sym
            }
            else if (small == true && matchO == 2){
                emty += lower
            }
            else if (cap == true && matchO == 3){
                emty += capitals
            }
            else if (count == true && matchO == 4){
                emty += num
            }
            else{
               emty
            }
        }
        for(var j = 0; j < len; j++){
        pass = Math.floor(Math.random() * emty.length)
        password += emty[pass]
        }
        document.getElementById("password").value = password
}

  