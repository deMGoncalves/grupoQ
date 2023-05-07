import h, { Fragment } from '@grupoq/h'
import Hide from '@grupoq/hide'
import Show from '@grupoq/show'

function component (lazy) {
  return (
    <>
      <Show when={lazy.ast}>{lazy.ast}</Show>
      <Hide when={lazy.ast}><div /></Hide>
    </>
  )
}

export default component
