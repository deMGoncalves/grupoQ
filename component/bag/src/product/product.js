import * as f from '@grupoq/f'
import * as filter from '@grupoq/filter'
import { paint, repaint } from '@grupoq/h'
import action from './action'
import component from './component'
import magic from '@grupoq/magic'
import storage from './storage'

@paint(component)
class Product {
  #bag
  #data

  get count () {
    return (this.#data.count ??= 0)
  }

  get id () {
    return this.#data.id
  }

  get image () {
    return (this.#data.image ??= 'fallback_1x1.png')
  }

  @filter.money
  get price () {
    return (this.#data.price ??= 9999999.99)
  }

  get title () {
    return (this.#data.title ??= 'ND')
  }

  constructor (data, bag) {
    this.#bag = bag
    this.#data = data
  }

  @storage.update
  @action.update
  @repaint
  add () {
    this.#data.count = f
      .from(this.count)
      .pipe(f.inc(f.__))
      .pipe(f.min(9, f.__))
      .done()
    return this
  }

  @storage.update
  @action.update
  @repaint
  sub () {
    this.#data.count = f
      .from(this.count)
      .pipe(f.dec(f.__))
      .pipe(f.max(1, f.__))
      .done()
    return this
  }

  remove () {
    this.#bag.remove(this)
    return this
  }

  [magic.sum] () {
    return (this.#data.price ?? 0) * (this.#data.count ?? 1)
  }

  static create (bag) {
    return (data) => new Product(data, bag)
  }
}

export default Product
