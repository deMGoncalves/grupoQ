import * as f from '@grupoq/f'
import h, { render } from '@grupoq/h'

export default (strings, ...expressions) => {
  const module = {}
  const textContent = f.zip(strings, expressions).flat(Infinity).join('').replace(/[\n ]+/g, ' ').trim()
  const textContentFormated = textContent.replace(
    /\.(?<class>[a-z][\w-_]+)/ig,
    (_, $1) => `.${(module[$1] ??= Math.random().toString(32).replace('0.', '_'))}`
  )

  render(
    document.head,
    <style>{textContentFormated}</style>
  )

  return module
}
