let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "~", "+", "=", "<", ">", ".", ",", "{", "}", "[", "]"]

let btn=document.getElementById("btn")
let boxN1=document.getElementById("fillN1")
let boxN2=document.getElementById("fillN2")
let boxD1=document.getElementById("fillD1")
let boxD2=document.getElementById("fillD2")
// password length
let passwordLength=12


function generateNight(){
    // reset output on input.. make value = "" INSIDE of the function
    boxN1.value=""
    boxN2.value=""

    // password length again
for (let i = 0; i< passwordLength; i++){
    let randomCode1=Math.floor(Math.random() *characters.length)
    let randomCode2=Math.floor(Math.random() *characters.length)
    // .value for input boxes instead of textContent etc.
    boxN1.value+=characters[randomCode1]
    boxN2.value+=characters[randomCode2]

}
}

function generateDay(){
    // reset output on input.. make value = "" INSIDE of the function
    boxD1.value=""
    boxD2.value=""

    // password length again
for (let i = 0; i< passwordLength; i++){
    let randomCode1=Math.floor(Math.random() *characters.length)
    let randomCode2=Math.floor(Math.random() *characters.length)
    // .value for input boxes instead of textContent etc.
    boxD1.value+=characters[randomCode1]
    boxD2.value+=characters[randomCode2]

}
}