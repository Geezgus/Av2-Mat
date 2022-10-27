import { Random } from './Random.mjs'

export class LCG extends Random {
  static #multiplier = 22695477
  static #increment = 1
  static #modulus = 4_294_967_296

  #seed = super.seed

  get next() {
    this.#seed = (LCG.#multiplier * this.#seed + LCG.#increment) % LCG.#modulus
    return this.#seed
  }
}