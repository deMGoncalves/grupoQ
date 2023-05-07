import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'
import override from '@grupoq/override'

const request = middleware((lazy) => {
  override(lazy, magic.didMount, async function () {
    const { default: component } = await lazy[request.import]()
    const ast = component()
    lazy[request.render](ast)
  })
})

Object.assign(request, {
  import: magic.request_import,
  render: magic.request_render
})

export default request
