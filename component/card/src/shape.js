import { paint } from '@grupoq/h'
import component from './component'

@paint(component)
class Shape {
  static create () {
    return new Shape()
  }

  static stub () {
    return new Shape()
  }
}

export default Shape
