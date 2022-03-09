import Ship from "../ship";

test('object assignment', () => {
  let boat = new Ship('dsf',[1,2,3])
  boat.hit(0)
  boat.hit(2)
  boat.hit(3)
  boat.hit(4)
  boat.hit(5)
  expect(boat.isSunk()).toBe(true);
});