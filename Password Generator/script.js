function randPassword(){
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&{}[]";
    let pass = "";

    let i = 0;
    while(i<12){
        let ind = Math.floor(Math.random()*str.length);
        let char = str.charAt(ind);
        pass += char;
        i++; 
    }
    return pass;
}

const generateBtn = document.querySelector('button');
const inputBox = document.querySelector('input');
const copyBtn = document.querySelector('i');


copyBtn.addEventListener('click',()=>{
    inputBox.select();
    window.navigator.clipboard.writeText(inputBox.value);

})


generateBtn.addEventListener('click',()=>{
    let password = randPassword();
    inputBox.value = password;
})