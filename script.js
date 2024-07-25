const passwordBox= document.getElementById("password");
const generateBtn = document.getElementById("generate")
const length = 12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number = "01234567890";
const symbol = "~!@#$%^&*()_+?><=";

const alChars = upperCase + lowerCase + number + symbol


generateBtn.addEventListener("click", ()=>{
   
        let password = "";
        password += upperCase[Math.floor(Math.random()*upperCase.length)];
        password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
        password += number[Math.floor(Math.random()*number.length)];
        password += symbol[Math.floor(Math.random()*symbol.length)];
        
        while(length > password.length){
       password += alChars[Math.floor(Math.random()*alChars.length)]
        }
    
        passwordBox.value = password
        console.log(password)
    }
)

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}