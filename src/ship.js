
class Ship {
    constructor(name, length) {
        this.name = name,
        this.length = length,
        this.isHorizantal = true, 
        this.coord = [],
        this.hits = []
    }
    hit(coordinate) {
        this.hits.push(coordinate)
    }
    isSunk() {
        if(this.coord.every((part) => this.hits.includes(part))){
            return true
        }
        return false
    }

}
export default Ship