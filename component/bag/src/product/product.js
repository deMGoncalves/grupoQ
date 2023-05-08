import * as f from '@grupoq/f'
import * as filter from '@grupoq/filter'
import { paint, repaint } from '@grupoq/h'
import action from './action'
import component from './component'
import local from '@grupoq/local'
import magic from '@grupoq/magic'
import storage from './storage'

@paint(component)
class Product {
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

  constructor (id, count, image, price, title) {
    this.#count = count
    this.#id = id
    this.#image = image
    this.#price = price
    this.#title = title
  }

  @repaint
  @storage.update
  @action.update
  add () {
    this.#count = f
      .from(this.count)
      .pipe(f.inc(f.__))
      .pipe(f.min(9, f.__))
      .done()
    return this
  }

  @repaint
  @storage.update
  @action.update
  sub () {
    this.#count = f
      .from(this.count)
      .pipe(f.dec(f.__))
      .pipe(f.max(1, f.__))
      .done()
    return this
  }

  @action.remove
  remove () {
    const bag = local.bag
    delete bag[this.#id]
    local.bag = bag
    return this
  }

  [magic.sum] () {
    return (this.#price ?? 0) * (this.#count ?? 1)
  }

  static create (data) {
    return new Product(
      data.id,
      data.count,
      data.image,
      data.price,
      data.title
    )
  }
}

export default Product
