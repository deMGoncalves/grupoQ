import { paint, repaint } from '@grupoq/h'
import component from './component'
import echo from '@grupoq/echo'
import effect from './effect'
import local from '@grupoq/local'

@paint(component)
@effect
class Bag {
  #count

  get count () {
    return (this.#count ??= Bag.length)
  }

  static get length () {
    return Object.keys(local.bag ?? {}).length
  }

  open () {
    echo.emit('bag:open')
    return this
  }

  @repaint
  [effect.onChange] () {
    this.#count = Bag.length
    return this
  }
}

export default Bag
