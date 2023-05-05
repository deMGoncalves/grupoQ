import magic from '@grupoq/magic'

function render (node, element) {
  node.append(element[render.flow]())
}

Object.assign(render, {
  flow: magic.render_flow
})

export default render
