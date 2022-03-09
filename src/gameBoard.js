
class Gameboard {
    constructor() {
        this.board = [],
        this.ships  = [],
        this.missed = [],
        this.allHits = [],
        this.shipPositions = []
    }
    createBoard() {
        for(let i = 0; i < 100; i++) {
            this.board.push(i)
        }
    }
    createGameBoard() {
        const div = document.createElement('div')
        div.classList.add('piece')
        return div
    }

    placeShip(ship, index) {
        if(ship.isHorizantal) {
            let array1 = []
            let i = 0
            while(i < ship.length) {
                array1.push(index)
                index++
                i++
            }
            ship.coord = [...array1]
            this.shipPositions.push(array1)
            this.ships.push(ship)
        } else {
            let j = 0
            let array2 = []
            while(j < ship.length) {
                array2.push(index)
                index+=10
                j++
            }
            ship.coord = [...array2]
            this.shipPositions.push(array2)
            this.ships.push(ship)
        }
    }
    recieveAttack(attack) {
        this.allHits.push(attack)
        this.shipPositions.forEach((item) => {
          if(item.includes(attack)) {
              this.ships.forEach((ship) => {
                  ship.hit(attack)
              })
          } else {
            this.missed.push(attack)
          }
        })
    }
    isAllShipsSunked() {
        if(this.ships.every((ship) => ship.isSunk())){
            return true
        } else {
            return false
        }
    }
    makeRandomMoves() {
        let randomNumber = Math.floor(Math.random() * 100)
        this.recieveAttack(randomNumber)
    }
    isPositionValid(ship, index) {
        if(ship.isHorizantal) {
           if(index % 10 == 10 - (ship.length - 1) || index % 10 == 10 - (ship.length - 2)|| index % 10 == 10 - (ship.length - 3)|| index % 10 == 10 - (ship.length - 4)) {
                return false
        } else {
            return true
        } 
        } else if(!ship.isHorizantal) {
            if(String(index)[0] == 10 - (ship.length - 1) || String(index)[0] == 10 - (ship.length - 2) || String(index)[0] == 10 - (ship.length - 3) || String(index)[0] == 10 - (ship.length - 4)){
                let invalids = []
                for(let i = index; i < 100 ; i++){
                    invalids.push(i)
                }
                if(invalids.includes(index)){
                    return false
                }
            } else {
                return true
            }
        }
    }
    hasPositionShip(ship, index) {
        if(ship.isHorizantal){
            let j = 0
            let truthy = []
            while(j < ship.length){
                truthy.push(this.shipPositions.some((item) => item.includes(index)))
                index++
                j++
            }
            return !truthy.includes(true)
            }  
        else if(!ship.isHorizantal) {
            let j = 0
            let thurty = []
            while(j < ship.length) {
                thurty.push(this.shipPositions.some((item) => item.includes(index)))
                index+=10
                j++
            }
            return (!thurty.includes(true))
        }      
        }
    

}
export default Gameboard