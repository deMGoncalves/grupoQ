import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from '../effect'

@paint(component)
@effect
class Title {
  #content

  get content () {
    return (this.#content ??= '')
  }

  @repaint
  [effect.onChange] (product) {
    this.#content = product.title
    return this
  }
}

export default Title
