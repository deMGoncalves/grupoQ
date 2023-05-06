import { paint, repaint } from '@grupoq/h'
import action from './action'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Bag {
  #id

  @action.add
  add () {
    const key = 'bag'
    const bag = JSON.parse(localStorage.getItem(key) ?? '{}')
    bag[this.#id] ??= 1
    localStorage.setItem(key, JSON.stringify(bag))
    return this
  }

  @repaint
  [effect.onChange] (product) {
    this.#id = product.id
    return this
  }
}

export default Bag
