import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from '../effect'

@paint(component)
@effect
class Image {
  #url

  get url () {
    return (this.#url ??= 'fallback_1x1.png')
  }

  @repaint
  [effect.onChange] (product) {
    this.#url = product.image
    return this
  }
}

export default Image
