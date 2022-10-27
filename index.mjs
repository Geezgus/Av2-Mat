import { getLottery } from './getLottery.mjs'
import { LCG } from './LCG.mjs'
import { MidSquare } from './MidSquare.mjs'

for (let i = 0; i < 10; i++) {
  console.log(getLottery(6, 60, new MidSquare()))
}