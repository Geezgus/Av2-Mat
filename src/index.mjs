import { getLottery } from './getLottery.mjs'
import { LCG } from './LCG.mjs'
import { MidSquare } from './MidSquare.mjs'

let LCGLotteries = {}

const LC = new LCG()
for (let i = 0; i < 10; i++) {
  LCGLotteries[i] = getLottery(6, 60, LC)
}
console.table(LCGLotteries)

// ---------------------------------------------------------

let MidSquareLotteries = {}

const MID = new MidSquare()
for (let i = 0; i < 10; i++) {
  MidSquareLotteries[i] = getLottery(6, 60, MID)
}
console.table(MidSquareLotteries)