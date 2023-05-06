import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Card {
  #id

  add () {
    return this
  }

  @repaint
  [effect.onChange] (product) {
    this.#id = product.id
    return this
  }
}

export default Card
