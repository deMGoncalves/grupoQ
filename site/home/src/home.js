import { paint } from '@grupoq/h'
import { setGlobal } from '@grupoq/global'
import component from './component'
import jsonld from './jsonld'
import storage from './storage'

@paint(component)
@jsonld
@storage
class Home {
  [storage.onError] (error) {
    console.log(error)
    return this
  }

  [storage.onResponse] (products) {
    setGlobal({ products })
    return this
  }
}

export default Home
