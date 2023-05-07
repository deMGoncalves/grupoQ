import { paint, repaint } from '@grupoq/h'
import action from './action'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Bag {
  #product

  @action.add
  add () {
    const key = 'bag'
    const bag = JSON.parse(localStorage.getItem(key) ?? '{}')
    Object.assign(this.#product, { count: (bag[this.#product.id]?.count ?? 1) })
    Object.assign(bag, { [this.#product.id]: this.#product })
    localStorage.setItem(key, JSON.stringify(bag))
    return this
  }

  @repaint
  [effect.onChange] (product) {
    this.#product = product
    return this
  }
}

export default Bag
