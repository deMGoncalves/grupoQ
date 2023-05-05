import Breadcrumb from './breadcrumb'
import h, { Fragment } from '@grupoq/h'
import Header from '@grupoq/header'
import Main from './main'
import Title from './title'

function component () {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Main>
        <Title />
      </Main>
    </>
  )
}

export default component
