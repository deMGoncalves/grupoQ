import { paint } from '@grupoq/h'
import { urlFor } from '@grupoq/router'
import component from './component'
import Stub from './stub'

@paint(component)
class Card {
  #id
  #image
  #price
  #title

  get image () {
    return (this.#image ??= 'fallback_1x1.png')
  }

  get price () {
    return (this.#price ??= 9999999)
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

  static create (data) {
    console.log(data.id)
    return new Card(
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

export default Card
