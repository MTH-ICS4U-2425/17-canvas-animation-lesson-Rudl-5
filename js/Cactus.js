import { CTX, CANVAS, GRAVITY, FLOOR, ground } from "./globals.js"

const TYPES = {
    0:[446,33,70,28],
    1:[480,67,70,28],
    2:[548,102,70,28],
    3:[652,49,100,50],
    4:[702,99,100,50],
    5:[802,149,100,50],

}

export default class Cactus {
    sx
    sy = 2
    sw
    sh
    dx 
    dy 
    type = 6

    create(){
        this.dx = 1150
        this.dy = FLOOR - TYPES[this.type][3]
        this.sx = TYPES[this.type][0]
        this.sw = TYPES[this.type][1]
        this.sh = TYPES[this.type][2]
    }
}
