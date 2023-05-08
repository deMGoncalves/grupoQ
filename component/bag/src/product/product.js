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
  #count
  #id
  #image
  #price
  #title

  get count () {
    return (this.#count ??= 0)
  }

  get id () {
    return this.#id
  }

  get image () {
    return (this.#image ??= 'fallback_1x1.png')
  }

  @filter.money
  get price () {
    return (this.#price ??= 9999999.99)
  }

  get title () {
    return (this.#title ??= 'ND')
  }

  constructor (id, count, image, price, title, bag) {
    this.#bag = bag
    this.#count = count
    this.#id = id
    this.#image = image
    this.#price = price
    this.#title = title
  }

  @storage.update
  @action.update
  @repaint
  add () {
    this.#count = f
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
    this.#count = f
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
    return (this.#price ?? 0) * (this.#count ?? 1)
  }

  static create (bag) {
    return (data) => (
      new Product(
        data.id,
        data.count,
        data.image,
        data.price,
        data.title,
        bag
      )
    )
  }
}

export default Product
