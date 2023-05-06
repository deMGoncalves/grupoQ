import * as filter from '@grupoq/filter'
import { paint, repaint } from '@grupoq/h'
import action from './action'
import component from './component'
import storage from './storage'

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

  @action.remove
  remove () {
    const key = 'bag'
    const bag = JSON.parse(localStorage.getItem(key) ?? '{}')
    delete bag[this.#id]
    localStorage.setItem(key, JSON.stringify(bag))
    return this
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
}

export default Product
