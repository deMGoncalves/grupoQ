import { component, Path } from '@grupoq/breadcrumb'
import { paint, repaint } from '@grupoq/h'
import { params, urlFor } from '@grupoq/router'
import effect from './effect'
import jsonld from './jsonld'

@paint(component)
@effect
class Breadcrumb {
  #paths = [
    { title: 'Home', href: urlFor('home') },
    { title: '', href: '' }
  ]

  get paths () {
    return this.#paths.map(Path.create)
  }

  @repaint
  @jsonld
  [effect.onChange] (product) {
    this.#paths = [
      { title: 'Home', href: urlFor('home') },
      { title: product.title, href: urlFor('product', params) }
    ]
    return this
  }
}

export default Breadcrumb
