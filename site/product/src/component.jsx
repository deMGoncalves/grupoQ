import Breadcrumb from './breadcrumb'
import Description from './description'
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
        <Description />
      </Main>
    </>
  )
}

export default component
