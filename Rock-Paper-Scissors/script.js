let userScore = 0;
let compScore = 0;
let msg = document.querySelector('#results');
const choices = document.querySelectorAll('.ch');
let re = document.querySelector('.result');
let winp = document.querySelector('.win');


const compChoice = () => {
    const options = ["rocks", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

const showWinner = (userWin, user, comp) => {

    if (userWin) {
        msg.innerHTML = `You:${user.toUpperCase()},Computer:${comp.toUpperCase()}::WON!!`;
        re.style.backgroundColor = "green";
        userScore++;
    } else {
        msg.innerHTML = `You:${user.toUpperCase()},Computer:${comp.toUpperCase()}::LOST`;
        re.style.backgroundColor = "red";
        compScore++;
    }
    winp.innerHTML = `Winning Percentage: ${(userScore / (userScore + compScore)) * 100}%`
}


const playGame = (userc) => {
    const cchoice = compChoice();
    if(userc === cchoice){
        msg.innerHTML = `You:${userc.toUpperCase()} , Computer:${cchoice.toUpperCase()}:: DRAW!!`;
        re.style.backgroundColor = "purple";
    }else{
        let userWin = true;
        if(userc === "rock"){
            userWin = cchoice === "paper" ? false:true;
        }else if(userc === "paper"){
            userWin = cchoice === "scissors" ? false: true;
        }else{
            userWin = cchoice === "rock" ? false: true;
        }
        showWinner(userWin,userc,cchoice);
    }
}


const board = () => {
    const ys = document.querySelector('.ys');
    const cs = document.querySelector('.cs');
    ys.innerHTML = `${userScore}`;
    cs.innerHTML = `${compScore}`;
}


choices.forEach((choice) => {
    choice.addEventListener('click', (e)=>{
        const choiceid = choice.getAttribute("id");
        playGame(choiceid);
        board();
    })
})

let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    location.reload();
})


