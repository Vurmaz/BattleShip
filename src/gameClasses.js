import Ship from "./ship"
import Player from "./player"

const human = new Player('Human')
const computer = new Player('Computer')

const destroyer1 = new Ship('destroyer', 2)
const submarine1 = new Ship('submarine', 3)
const cruiser1 = new Ship('cruiser', 3)
const battleShip1 = new Ship('battleShip', 4)
const carrier1= new Ship('carrier', 5)

const destroyer2 = new Ship('destroyer', 2)
const submarine2 = new Ship('submarine', 3)
const cruiser2 = new Ship('cruiser', 3)
const battleShip2 = new Ship('battleShip', 4)
const carrier2 = new Ship('carrier', 5)

export {human, computer, destroyer1, submarine1, cruiser1, battleShip1, carrier1, destroyer2, submarine2, cruiser2, battleShip2, carrier2}