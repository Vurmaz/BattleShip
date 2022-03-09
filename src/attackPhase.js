import { humanBoard, computerBoard, winText, overlay } from "./DOM"
import { human, computer } from "./gameClasses"
import { winnerPop } from "./DOM"
function makeAttack() {
    const humanArray = Array.from(humanBoard.children)
    const computerArray = Array.from(computerBoard.children)
    for(let i = 0; i < 100; i++){
        computerBoard.addEventListener('click', (event) => {
            if(event.target == computerArray[i]){
                if(computerArray[i].classList.contains('hit') || computerArray[i].classList.contains('shot')){
                    return
                } else {
                    takeHit(computer, computerArray, i)
                    checkSunkedComputerShips(computerArray)
                    checkWinner(computer, human)
                }
                    computerHit(human, humanArray, Math.floor(Math.random() * 100))
                    checkSunkedHumanShips(humanArray)
                    checkWinner(human, computer)
            } 
            })
        }
}
async function computerHit(player, board, i) {
    if(board[i].classList.contains('hit') || board[i].classList.contains('shot')){
        computerHit(player, board,  Math.floor(Math.random() * 100))
    }
    setTimeout(takeHit(player, board, i), 2000)
}
function takeHit(player, board, i) {
    if(board[i].classList.contains('hit')){
        return
    }
    player.gameboard.recieveAttack(i)
    if(checkShipShots(player, i)){
        board[i].classList.remove('hide')
        board[i].classList.add('shot')
    } else {
        board[i].classList.add('hit') 
    }
}
function checkShipShots(player, i) {
    let thurty
    player.gameboard.shipPositions.forEach((ship) => {
        if(ship.includes(i)){
            thurty = true
        }
    })
    return thurty
}
function checkWinner(player, opponent) {
    if(player.gameboard.isAllShipsSunked()){
        winnerPop.classList.add('show')
        overlay.classList.add('overlay-active')
        winText.innerText = `${opponent.name} Wins`
    }
}
function checkSunkedComputerShips(board) {
    computer.gameboard.ships.forEach((ship) => {
        if(ship.isSunk()){
            ship.coord.forEach((elem) => board[elem].classList.add('sunked'))
        }
    }) 
}
function checkSunkedHumanShips(board) {
    human.gameboard.ships.forEach((ship) => {
        if(ship.isSunk()){
            ship.coord.forEach((elem) => board[elem].classList.add('sunked'))
        }
    }) 
}
export default makeAttack