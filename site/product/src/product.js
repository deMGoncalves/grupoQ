import * as filter from '@grupoq/filter'
import { paint, repaint } from '@grupoq/h'
import component from './component'
import jsonld from './jsonld'
import storage from './storage'

@paint(component)
@jsonld
@storage
class Product {
  #description
  #image
  #price
  #title

  get description () {
    return (this.#description ??= '')
  }

  get image () {
    return (this.#image ??= 'fallback_1x1.png')
  }

  @filter.money
  get price () {
    return (this.#price ??= 9999999)
  }

  get title () {
    return (this.#title ??= 'ND')
  }

  [storage.onError] (error) {
    console.log(error)
    return this
  }

  @repaint
  [storage.onResponse] (data) {
    this.#description = data.description
    this.#image = data.image
    this.#price = data.price
    this.#title = data.title
    return this
  }
}

export default Product
