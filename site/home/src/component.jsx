import h, { Fragment } from '@grupoq/h'
import Header from '@grupoq/header'
import Main from './main'
import Shelf from './shelf'

function component () {
  return (
    <>
      <Header />
      <Main>
        <Shelf />
      </Main>
    </>
  )
}

export default component
