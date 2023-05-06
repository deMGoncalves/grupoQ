import h from '@grupoq/h'
import Main from './main'
import Master from '@grupoq/master'
import Shelf from './shelf'

function component () {
  return (
    <Master>
      <Main>
        <Shelf />
      </Main>
    </Master>
  )
}

export default component
