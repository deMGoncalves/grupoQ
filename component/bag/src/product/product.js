import * as filter from '@grupoq/filter'
import { paint } from '@grupoq/h'
import action from './action'
import component from './component'
import magic from '@grupoq/magic'

@paint(component)
class Product {
  #count
  #id
  #image
  #price
  #title

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

  constructor (id, image, price, title) {
    this.#id = id
    this.#image = image
    this.#price = price
    this.#title = title
  }

  @action.remove
  remove () {
    const key = 'bag'
    const bag = JSON.parse(localStorage.getItem(key) ?? '{}')
    delete bag[this.#id]
    localStorage.setItem(key, JSON.stringify(bag))
    return this
  }

  [magic.sum] () {
    return this.#price ?? 0
  }

  static create (data) {
    return new Product(
      data.id,
      data.image,
      data.price,
      data.title
    )
  }
}

export default Product
