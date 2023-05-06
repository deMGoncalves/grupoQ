import Bag from './bag'
import Breadcrumb from './breadcrumb'
import Description from './description'
import h, { Fragment } from '@grupoq/h'
import Header from '@grupoq/header'
import Image from './image'
import Main from './main'
import Price from './price'
import Title from './title'

function component () {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Main>
        <Image />
        <Title />
        <Description />
        <Price />
        <Bag />
      </Main>
    </>
  )
}

export default component
