let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');

let turno = true;
let msg = document.querySelector('#msg');



const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turno = true;

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log('hi bro');
        if (turno) {
            box.style.color = 'red';
            box.innerHTML = 'O';
            turno = false;
        } else {
            box.style.color = 'yellow';
            box.innerText = 'X';
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;//learned this thing
    }
}

const enableBoxes = () => {
    turno = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msg.innerHTML = "";

}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
}

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                disableBoxes();
            }
        }
    }
}


resetBtn.addEventListener('click', enableBoxes)
