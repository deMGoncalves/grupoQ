import { paint, repaint } from '@grupoq/h'
import action from './action'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Card {
  #id

  @action.add
  add () {
    const key = 'card'
    const card = JSON.parse(localStorage.getItem(key) ?? '{}')
    card[this.#id] ??= 1
    localStorage.setItem(key, JSON.stringify(card))
    return this
  }

  @repaint
  [effect.onChange] (product) {
    this.#id = product.id
    return this
  }
}

export default Card
