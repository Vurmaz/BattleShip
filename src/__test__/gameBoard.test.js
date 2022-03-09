import Gameboard from "../gameBoard";
import Ship from '../ship'

test('gameboard factory', () => {
    let boat = new Ship('boat', 2)
    let ferry = new Ship('ferry', 3)
    ferry.isHorizantal = false
    let gb = new Gameboard()
    gb.createBoard()
    gb.placeShip(boat, 0)
    gb.placeShip(ferry, 25)
    gb.recieveAttack(0)
    gb.recieveAttack(1)
    gb.recieveAttack(25)
    gb.recieveAttack(35)
    gb.recieveAttack(45)
    expect(gb.isAllShipsSunked()).toBe(true)
})