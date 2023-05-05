import * as f from '@grupoq/f'
import { paint, repaint } from '@grupoq/h'
import Card from '@grupoq/card'
import component from './component'
import jsonld from './jsonld'
import storage from './storage'

@paint(component)
@jsonld
@storage
class Home {
  #cards

  get cards () {
    return (this.#cards ??= f.repeat(24, {}).map(Card.stub))
  }

  [storage.onError] (error) {
    console.log(error)
    return this
  }

  @repaint
  [storage.onResponse] (data) {
    this.#cards = data.map(Card.create)
    return this
  }
}

export default Home
