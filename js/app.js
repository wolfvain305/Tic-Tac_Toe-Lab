/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('.message');
const resetBtnEL = document.getElementById('reset')
/*---------------------------- Variables (state) ----------------------------*/

let board = ['','','',
             '','','',
             '','','',];
let turn = 'X';
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log("Initialization complete.");

    // the board stuff
    board = ['','','',
             '','','',
             '','','',]

    // Players
    turn = 'X'
    
    //Game status
    winner = false;
    tie = false;

   
    }

render();

 function updateBoard() {
        board.forEach((square, index) => {
            squareEls[index].textContent
            if (square === 'X') {
                squareEls[index].textContent = "X"
            } else if 
            (square === 'O') {
            squareEls[index].textContent = "O"
            }
            else {
                squareEls[index].style.backgroundColor = "White"
            }

        });
    }

    function updateMessage() {
        if (winner && tie === false) {
            (turn === 'X')
        }
        if ( winner === false && tie === true) {
            (turn = 'tie')
        }
    }

    const winningCombos = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6]  // Diagonal from top-right to bottom-left
    ]
    

window.onload = function () {
    init();
}
function render() {
    console.log("Rendering...")
    updateBoard()
}

function handleClick(event) {
    const squareIndex = parseInt(event.target.id)

    // game status
    if (winner || tie) {
    return;
    }

    if (board[squareIndex] === "X" || board[squareIndex] === 'O'){
    return;
    }

    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchTurn()
    // console.log(placePiece)
    console.log("winner:", winner)
    console.log("tie:", tie);
    console.log("turn:", turn)
}

function placePiece(index) {
    board[index] = turn;
    console.log("updating Board", board)
    }

function checkForWinner() {
    for (let i =0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];

        if(board[a] !== '' && board [a] === board[b] && board[a] === board[c]) {
            winner = true;
            return;
        }
    }
}

function checkForTie() {
    if  (winner === true) {
        return;
    }
    if (!board.includes('')) {
        tie = true
    }
    
}      

function switchTurn() {
    if (winner === true) {
        return;
    } 
    turn = (turn === 'X') ? 'O' : 'X';
}

function render() {
    updateBoard();
    updateMessage();
}   

window.onload = function () {
    init();
}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => {
    square.addEventListener('click', handleClick);
})
resetBtnEL.addEventListener('click',init);
