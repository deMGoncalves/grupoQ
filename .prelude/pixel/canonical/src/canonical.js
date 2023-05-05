import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Canonical {
  #href

  get href () {
    return (this.#href ??= location.href)
  }

  @repaint
  [effect.onChange] (href) {
    this.#href = href
    return this
  }
}

export default Canonical
