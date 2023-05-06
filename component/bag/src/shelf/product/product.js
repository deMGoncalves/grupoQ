import * as filter from '@grupoq/filter'
import { paint, repaint } from '@grupoq/h'
import component from './component'
import storage from './storage'
import Stub from './stub'

@paint(component)
@storage
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

  constructor (id, count) {
    this.#id = id
    this.#count = count
  }

  [storage.onError] (error) {
    console.log(error)
    return this
  }

  @repaint
  [storage.onResponse] (data) {
    this.#image = data.image
    this.#price = data.price
    this.#title = data.title
    return this
  }

  static create (data) {
    return new Product(...data)
  }

  static stub () {
    return new Stub()
  }
}

export default Product
