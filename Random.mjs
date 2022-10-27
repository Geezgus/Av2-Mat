const NANOSECOND_PER_SECOND = 1e9

export class Random {
  #seed = 0

  constructor() {
    const [seconds, nanoseconds] = process.hrtime()
    this.#seed = (seconds * NANOSECOND_PER_SECOND + nanoseconds)
  }

  get next() {
    throw new Error("Operation not supported")
  }

  get seed() {
    return this.#seed
  }
}