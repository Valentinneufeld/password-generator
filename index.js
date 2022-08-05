const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let testfield = document.querySelector("#test-field")

let password1 = document.querySelector("#password-1")
let password2 = document.querySelector("#password-2")
let randomCharacter1 = ""
let randomCharacter2 = ""


function generatePassword() {
    password1.textContent = ""
    password2.textContent = ""

    for (i = 0; i < 16; i++) {
        randomCharacter1 = characters[Math.floor(Math.random() * 91)]
        password1.textContent += randomCharacter1

        randomCharacter2 = characters[Math.floor(Math.random() * 91)]
        password2.textContent += randomCharacter2
    }
    
}

function copyPassword1() {
    if (password1.textContent != "") {
        /* Get the text field */
        var copyText = password1.textContent
        navigator.clipboard.writeText(copyText) 
            alert("Copied Password1 to clipboard")
    } else {
        alert("To copy, you have to generate a password first!")
    }
}

function copyPassword2() {
    if (password2.textContent != "") {
        /* Get the text field */
        let copyText = password2.textContent
        navigator.clipboard.writeText(copyText) 
            alert("Copied Password2 to clipboard")
        } else {
            alert("To copy, you have to generate a password first!")
        }
}
