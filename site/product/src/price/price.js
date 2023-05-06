import * as filter from '@grupoq/filter'
import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Price {
  #value

  @filter.money
  get value () {
    return (this.#value ??= 999999)
  }

  @repaint
  [effect.onChange] (product) {
    this.#value = product.price
    return this
  }
}

export default Price
