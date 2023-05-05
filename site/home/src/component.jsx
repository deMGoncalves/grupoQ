import h, { Fragment } from '@grupoq/h'
import Header from '@grupoq/header'
import Main from './main'
import Shelf from '@grupoq/shelf'

function component (home) {
  return (
    <>
      <Header />
      <Main>
        <Shelf>{home.cards}</Shelf>
      </Main>
    </>
  )
}

export default component
