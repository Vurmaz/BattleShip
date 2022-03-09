
import { human, computer } from "./gameClasses"
import { humanBoard, computerBoard } from "./DOM"
import makeAttack from "./attackPhase"
import deployShips from "./deployShips"


function createAllBoards() {
    human.createPlayBoard(humanBoard)
    computer.createPlayBoard(computerBoard)
}
function restartGame() {
    const btn = document.querySelector('.restart')
    btn.addEventListener('click', () => {
        window.location.reload()
    })
}
function render() {
    createAllBoards()
    deployShips()
    makeAttack()
    restartGame()
}
export default render