import { paint, repaint } from '@grupoq/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Description {
  #content = 'A plataforma prática para o preparo para concursos públicos, que integra todas as etapas do estudo. Com 450 mil assinantes, é a maior edtech do Brasil.';

  get content () {
    return this.#content
  }

  @repaint
  [effect.onChange] (content) {
    this.#content = content
    return this
  }
}

export default Description
