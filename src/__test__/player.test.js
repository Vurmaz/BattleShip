import Player from "../player"

import Ship from "../ship"

test('player test', () => {
    let human = new Player('human')
    let computer = new Player('computer')
    let carrier = new Ship('carrier', 5)
    let destroyer = new Ship('destroyer', 2)
    human.gameboard.placeShip(carrier, 1)
    computer.gameboard.placeShip(destroyer, 80)
    computer.gameboard.recieveAttack(80)
    computer.gameboard.recieveAttack(81)
/*     computer.gameboard.recieveAttack(3)
    computer.gameboard.recieveAttack(4)
    computer.gameboard.recieveAttack(5) */
    expect(computer.gameboard.isAllShipsSunked()).toBe(true)
})
