function generateNumber(){
    let num = Math.floor(Math.random()*(100) + 1);
    return num;
}

function higher(){
    msg.innerHTML = `Try higher`;
}

function lower(){
    msg.innerHTML = `Try Lower`;
}

function winner(num,att){
    msg.innerHTML = `Congratulations! You got ${num} right, in ${att} attempts`
}

function resets(){
    attempts = 0;
    msg.innerHTML = "";
    ans = generateNumber();
    input.value = "";
}

let ans = generateNumber();
let attempts = 0;

const input = document.querySelector('input');
const guess = document.querySelector('#guess');
const msg = document.querySelector('.msg');
const reset = document.querySelector('#reset');

guess.addEventListener('click',function(){
    attempts++;
    console.log(ans);
    let user = input.value;
    if(ans>user) higher();
    else if(ans < user) lower();
    else{
        winner(ans,attempts);
    }
})

reset.addEventListener('click',resets)
