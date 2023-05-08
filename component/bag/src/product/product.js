import * as filter from '@grupoq/filter'
import { paint, repaint } from '@grupoq/h'
import action from './action'
import component from './component'
import local from '@grupoq/local'
import magic from '@grupoq/magic'

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
  @action.update
  add () {
    this.#count = Math.min(9, (this.count + 1))
    const bag = JSON.parse(localStorage.getItem('bag') ?? '{}')
    bag[this.#id].count = this.count
    localStorage.setItem('bag', JSON.stringify(bag))
    return this
  }

  @repaint
  @action.update
  sub () {
    this.#count = Math.max(1, (this.count - 1))
    const bag = JSON.parse(localStorage.getItem('bag') ?? '{}')
    bag[this.#id].count = this.count
    localStorage.setItem('bag', JSON.stringify(bag))
    return this
  }

  @action.remove
  remove () {
    delete local.bag[this.#id]
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
