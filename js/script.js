let result = document.querySelector(".result")
let generate = document.querySelector(".generate")
let reset = document.querySelector(".reset")
let numbers = "0123456789"
let otp = ""

function gen(){ 
    otp = "" // before generating otp it will first clear it out 
    for(let i = 0 ; i <6 ; i++){
        otp+= numbers [Math.floor(Math.random()*numbers.length)]
    } // for loop to in if i is less then 6 it will increment the value 
    result.innerHTML = otp // result will show at html span tag 
}

generate.addEventListener("click",function(){ // button to generate numbers
    gen()
})

function res(){
    otp = "" // after reset the otp will clear out the existing number
    result.innerHTML = "" // rest will also clear the result that has been already shown 
}

reset.addEventListener("click",function(){ // reset button
    res()
})
