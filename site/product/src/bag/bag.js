import { paint, repaint } from '@grupoq/h'
import action from './action'
import component from './component'
import effect from './effect'
import local from '@grupoq/local'

@paint(component)
@effect
class Bag {
  #product

  get #id () {
    return this.#product.id
  }

  @action.add
  add () {
    local.bag ??= {}
    local.bag[this.#id] ??= this.#product
    local.bag[this.#id].count ??= 1
    return this
  }

  @repaint
  [effect.onChange] (product) {
    this.#product = product
    return this
  }
}

export default Bag
