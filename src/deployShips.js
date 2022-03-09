import { humanBoard, computerBoard, placeBoard, rotateBtn } from "./DOM"
import {human, computer, destroyer1, submarine1, cruiser1, battleShip1, carrier1, destroyer2, submarine2, cruiser2, battleShip2, carrier2} from "./gameClasses"
import renderGame from "./startGame"

const place = placeBoard.querySelectorAll('.pie')
const placeArray = Array.from(place)

export default function deployShips() {
    const computerArray = Array.from(computerBoard.children)
    let count = 0 
    
    if(count == 0) {
    rotateShip(carrier1)
    hoverShip(carrier1)
    }    
    placeBoard.addEventListener('click', (event) => {
        for(let i = 0; i < placeArray.length; i++) {
            if(event.target == placeArray[i]) {
                 if(count == 0) {
                    rotateShip(battleShip1)
                    hoverShip(battleShip1)
                    if(isValid(human, carrier1, i)){
                        renderShip(human, carrier1, i)
                        placeComputerShip(computer, carrier2, Math.floor(Math.random() * 100))                        
                        count++
                    }
                }
                else if(count == 1) {
                    rotateShip(cruiser1)
                    hoverShip(cruiser1)
                    if(isValid(human, battleShip1, i)){
                        renderShip(human, battleShip1, i)
                        placeComputerShip(computer, battleShip2, Math.floor(Math.random() * 100))
                        count++
                    }
                    
                }
                else if(count == 2) {
                    rotateShip(submarine1)    
                    hoverShip(submarine1)                
                    if(isValid(human, cruiser1, i)){
                        renderShip(human, cruiser1, i)
                        placeComputerShip(computer, cruiser2, Math.floor(Math.random() * 100))
                        count++
                    }
                }
                else if(count == 3) {
                    rotateShip(destroyer1)
                    hoverShip(destroyer1)
                    if(isValid(human, submarine1, i)){
                        renderShip(human, submarine1, i)
                        placeComputerShip(computer, submarine2, Math.floor(Math.random() * 100))
                        count++
                    }
                }
                else if(count == 4) {
                    if(isValid(human, destroyer1, i)){
                        renderShip(human, destroyer1, i)
                        placeComputerShip(computer, destroyer2, Math.floor(Math.random() * 100))
                        hideComputerShips(computerArray)
                        renderGame()
                        count++
                    }
                } 
            }
        }  
    })
}
function hoverShip(ship) {
    placeArray.forEach((item) => item.classList.remove('hvr'))
     if(ship.isHorizantal){
        let hoverArray = []
        placeBoard.addEventListener('mouseover', (event) => {
            placeArray.forEach(item=>item.classList.remove('hvr'))
            let count = 0
            for(let i = 0; i < placeArray.length; i++){
                if(event.target == placeArray[i]) {
                    if(human.gameboard.isPositionValid(ship, i) && human.gameboard.hasPositionShip(ship, i)){
                            while(count < ship.length) {
                                placeArray[i].classList.add('hvr')
                                hoverArray.push(i)
                                i++
                                count++
                            }
                    }
                }
            } 
        })
    placeBoard.addEventListener('mouseout', () => {
        hoverArray.forEach((item) => {
            placeArray[item].classList.remove('hvr')
        })
    })  
    } else {
        let hvrArray = []
        placeBoard.addEventListener('mouseover', (event) => {
            placeArray.forEach(item=>item.classList.remove('hvr'))
            let count = 0
            for(let i = 0; i < placeArray.length; i++) {
                if(event.target == placeArray[i]) {
                    if(human.gameboard.isPositionValid(ship, i) && human.gameboard.hasPositionShip(ship, i)) {
                        while(count < ship.length) {
                            placeArray[i].classList.add('hvr')
                            hvrArray.push(i)
                            i+=10
                            count++
                        }
                    }
                }
            }
        })
        placeBoard.addEventListener('mouseout', () => {
                hvrArray.forEach((item) => {
                placeArray[item].classList.remove('hvr')
            })
        })
    }
}
function rotateShip(ship) {
    rotateBtn.addEventListener('click', () => {
        ship.isHorizantal = !ship.isHorizantal
        hoverShip(ship)
    })
}
function placeComputerShip(player, ship , randomNumber) { 
    ship.isHorizantal = Math.random() < 0.5
    if(isValid(player, ship, randomNumber)){
        renderShip(player, ship, randomNumber)
    }else{
        placeComputerShip(player, ship, Math.floor(Math.random() * 100))
    }
}
function renderShip(player, ship, i) { 
    const humanArray = Array.from(humanBoard.children)
    const computerArray = Array.from(computerBoard.children)
    deployShip(player, ship, i)
    renderPlacementShips()
    renderDeployedShips(human, humanArray)   
    renderDeployedShips(computer, computerArray)
}
function isValid(player, ship, i) {
    if(checkValidation(player, ship, i)){
        return true
    }else{
        return false
    }
}
function deployShip(player, ship, i) {
    player.gameboard.placeShip(ship, i)
}
function checkValidation(player, ship, i) {
     if(player.gameboard.isPositionValid(ship, i) && hasShip(i) && player.gameboard.hasPositionShip(ship, i))return true
     return false
}
 function renderPlacementShips() {
    human.gameboard.shipPositions.forEach((position) => {
        position.forEach((pos) => {
            placeArray[pos].classList.add('ship')
    })
})
} 
function hideComputerShips(computerArray) {
    computer.gameboard.shipPositions.forEach((ship) => {
        ship.forEach((pos) => {
            computerArray[pos].classList.add('hide')
        })
    })
}
function renderDeployedShips(player, array) {
    
    player.gameboard.shipPositions.forEach((position) => {
    position.forEach((pos) => {
        array[pos].classList.add('ship')
    })
})
}
function hasShip(index) {
    if(placeArray[index].classList.contains('ship')){
        return false
    } else {
        return true
    }
}