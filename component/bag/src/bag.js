import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from './effect'
import Product from './product'
import storage from './storage'

@paint(component)
@effect
@storage
class Bag {
  #opened
  #products

  get opened () {
    return (this.#opened ??= false)
  }

  get products () {
    return (this.#products ??= [])
  }

  @repaint
  close () {
    this.#opened = false
    return this
  }

  @repaint
  [effect.open] () {
    this.#opened = true
    return this
  }

  @repaint
  [storage.onResponse] (products) {
    this.#products = products.map(Product.create)
    return this
  }
}

export default Bag
