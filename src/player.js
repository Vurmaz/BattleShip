import Gameboard from "./gameBoard"

class Player{
    constructor(name) {
        this.name = name,
        this.gameboard = new Gameboard()
    }
    createPlayBoard(player) {
        this.gameboard.createBoard()
        for(let j = 0; j < this.gameboard.board.length; j++) {
            player.appendChild(this.gameboard.createGameBoard())   
        }  
    }

}
export default Player