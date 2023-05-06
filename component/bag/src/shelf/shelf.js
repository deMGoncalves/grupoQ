import * as f from '@grupoq/f'
import { paint, repaint } from '@grupoq/h'
import component from './component'
import Product from './product'
import storage from './storage'

@paint(component)
@storage
class Shelf {
  #products

  get products () {
    return (this.#products ??= f.repeat(20, {}).map(Product.stub))
  }

  @repaint
  [storage.onChange] (products) {
    this.#products = products.map(Product.create)
    return this
  }
}

export default Shelf
