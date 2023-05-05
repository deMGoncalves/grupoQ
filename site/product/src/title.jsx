import global from '@grupoq/global'
import h from '@grupoq/h'
import text from '@grupoq/text'

function component () {
  return (
    <text.H1 master dark md highlight bold>{global?.title}</text.H1>
  )
}

export default component
