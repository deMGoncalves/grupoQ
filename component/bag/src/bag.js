import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Bag {
  #opened

  get opened () {
    return (this.#opened ??= false)
  }

  @repaint
  close () {
    this.#opened = false
    return this
  }

  @repaint
  [effect.onChange] () {
    this.#opened = true
    return this
  }
}

export default Bag
