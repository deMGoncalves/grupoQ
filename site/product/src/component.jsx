import h, { Fragment } from '@grupoq/h'
import Header from '@grupoq/header'
import Main from './main'
import Shelf from '@grupoq/shelf'

function component (product) {
  return (
    <>
      <Header />
      <Main>
        <Shelf>{product.cards}</Shelf>
      </Main>
    </>
  )
}

export default component
