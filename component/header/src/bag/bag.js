import { paint } from '@grupoq/h'
import component from './component'

@paint(component)
class Bag {
  #count

  get count () {
    return this.#count
  }
}

export default Bag
