
let btn = document.getElementById("btn");
let username = document.getElementById('username')
let err1 = document.getElementById('err1')

let usernameRegX =/^[a-zA-Z0-9_]{3,15}$/

    btn.addEventListener("click", () => {
        
        let testResult1 = usernameRegX.test(username.value)
    
    if( testResult1){
        err1.style.visibility = 'hidden'
        
    }
    else {
        err1.style.visibility = 'visible'
    }
})


let email = document.getElementById('email')
let err2 = document.getElementById('err2')
let emailRegX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    btn.addEventListener("click", () => {
        
        let testResult2= emailRegX.test(email.value)
    
    if(testResult2){
        err2.style.visibility = 'hidden'
        
    }
    else {
        err2.style.visibility = 'visible'
    }
})

let password = document.getElementById('password')
let err3 = document.getElementById('err3')
let passwordRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

btn.addEventListener("click", () => {
    
    let testResult3 = passwordRegX.test(password.value)

if(testResult3){
    err3.style.visibility = 'hidden'

}
else {
    err3.style.visibility = 'visible'
}
})

