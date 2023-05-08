import * as f from '@grupoq/f'
import * as filter from '@grupoq/filter'
import { paint, repaint } from '@grupoq/h'
import action from './action'
import component from './component'
import Product from './product'
import storage from './storage'

@paint(component)
@action
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

  @filter.money
  get total () {
    return f.sum(...this.products)
  }

  @repaint
  close () {
    this.#opened = false
    return this
  }

  @storage.remove
  @action.remove
  @repaint
  remove (product) {
    f.remove(this.#products, product)
    return this
  }

  @repaint
  [action.open] () {
    this.#opened = true
    return this
  }

  @repaint
  [storage.onResponse] (products) {
    this.#products = products.map(Product.create(this))
    return this
  }
}

export default Bag
