import * as filter from '@grupoq/filter'
import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from '../effect'

@paint(component)
@effect
class Price {
  #value

  @filter.money
  get value () {
    return (this.#value ??= 9999999.99)
  }

  @repaint
  [effect.onChange] (product) {
    this.#value = product.price
    return this
  }
}

export default Price
