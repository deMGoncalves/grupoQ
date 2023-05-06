import Breadcrumb from './breadcrumb'
import Description from './description'
import h, { Fragment } from '@grupoq/h'
import Header from '@grupoq/header'
import Main from './main'
import Price from './price'
import Title from './title'

function component () {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Main>
        <Title />
        <Description />
        <Price />
      </Main>
    </>
  )
}

export default component
