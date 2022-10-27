import { Random } from "./Random.mjs";

export class MidSquare extends Random {
  #seed = super.seed

  get next() {
    this.#seed = parseInt(String((this.#seed * this.#seed)).padStart(10, '0').substring(3, 7))

    return this.#seed
  }
}