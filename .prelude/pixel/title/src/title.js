import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Title {
  #content = 'Grupo Q';

  get content () {
    return this.#content
  }

  @repaint
  [effect.onChange] (content) {
    this.#content = content
    return this
  }
}

export default Title
