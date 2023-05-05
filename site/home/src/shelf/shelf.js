import * as f from '@grupoq/f'
import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from './effect'
import Product from './product'

@paint(component)
@effect
class Shelf {
  #products

  get products () {
    return (this.#products ??= f.repeat(20, {}).map(Product.stub))
  }

  @repaint
  [effect.onChange] (products) {
    this.#products = products.map(Product.create)
    return this
  }
}

export default Shelf
