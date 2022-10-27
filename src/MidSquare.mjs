import { Random } from "./Random.mjs";

export class MidSquare extends Random {
  #seed = super.seed

  get next() {
    // Transform seed by the following rules:
    // * Square it
    // * Select 4 digits in the middle
    // * Use them as the new seed
    this.#seed = parseInt(
      String((this.#seed * this.#seed)).padStart(8, '0')
        .substring(2, 6)
    )

    return this.#seed
  }
}