import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Title {
  #content

  get content () {
    return (this.#content ??= 'Grupo Q')
  }

  @repaint
  [effect.onChange] (content) {
    this.#content = content
    return this
  }
}

export default Title
