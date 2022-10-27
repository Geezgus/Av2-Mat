let PRNG = null

export function getLottery(lotterySize, maxNumber, randomAlgorithm) {
  PRNG = randomAlgorithm

  let result = new Array(lotterySize).fill(-1)

  for (let i = 0; i < result.length;) {
    const number = (PRNG.next % maxNumber) + 1

    if (!result.includes(number, 0)) {
      result[i] = number
      i++
    }
  }

  return result
}