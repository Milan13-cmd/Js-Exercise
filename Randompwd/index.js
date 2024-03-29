let generateBtn = document.querySelector("#generate-btn")
let randomPass = document.querySelector("#pass");
function generatepwd(length, includeLowercase,includeUppercase,includeNumbers,includeSymbols){
   
    const lowercaseChars ="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    const numberChars = "0123456789";
    const symbolChars= "!@#$%^&*()_+-=";
   
    let allowedChars ="";
    let password ="";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";


    if(length <= 0){
        return`(password length must be greater than zero)`;

    }
    if(allowedChars.length === 0){
        return `at least 1 set of charcter needs to be selected`;
    }

    for(let i= 0; i< length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}
function click(){
    
    const passwordLength = 12;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;
    
    
    const password = generatepwd(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols  )
    
    randomPass.textContent = `Generate Random password : ${password}`;
}

generateBtn.addEventListener("click",click);