const humanBoard = document.querySelector('.player')
const computerBoard = document.querySelector('.opponent')
const pop = document.querySelector('.pop')
const table = document.querySelectorAll('.table')

function renderGame() {
    pop.style.display = 'none'
    humanBoard.style.display = 'grid'
    computerBoard.style.display = 'grid'
    table.forEach((board) => {
        board.style.display = 'flex'
    })
    
}
export default renderGame