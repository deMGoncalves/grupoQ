import * as filter from '@grupoq/filter'
import { paint } from '@grupoq/h'
import { urlFor } from '@grupoq/router'
import component from './component'
import jsonld from './jsonld'
import Stub from './stub'

@paint(component)
class Product {
  #id
  #image
  #price
  #title

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

  get url () {
    return urlFor('product', { id: this.#id })
  }

  constructor (id, image, price, title) {
    this.#id = id
    this.#image = image
    this.#price = price
    this.#title = title
  }

  @jsonld
  static create (data) {
    return new Product(
      data.id,
      data.image,
      data.price,
      data.title
    )
  }

  static stub () {
    return new Stub()
  }
}

export default Product
