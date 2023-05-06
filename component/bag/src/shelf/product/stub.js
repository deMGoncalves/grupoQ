import { paint } from '@grupoq/h'
import component from './component'

@paint(component)
class Stub {
  get image () {
    return 'fallback_1x1.png'
  }
}

export default Stub
