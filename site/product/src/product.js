import { paint } from '@grupoq/h'
import { setDescription } from '@grupoq/description'
import { setGlobal } from '@grupoq/global'
import { setTitle } from '@grupoq/title'
import component from './component'
import jsonld from './jsonld'
import storage from './storage'

@paint(component)
@storage
class Product {
  [storage.onError] (error) {
    console.log(error)
    return this
  }

  @jsonld
  [storage.onResponse] (product) {
    setGlobal({ product })
    setTitle(product.title)
    setDescription(product.description)
    return this
  }
}

export default Product
