import Bag from './bag'
import Breadcrumb from './breadcrumb'
import Description from './description'
import h from '@grupoq/h'
import Image from './image'
import Main from './main'
import Master from '@grupoq/master'
import Price from './price'
import Title from './title'

function component () {
  return (
    <Master>
      <Breadcrumb />
      <Main>
        <Image />
        <Title />
        <Description />
        <Price />
        <Bag />
      </Main>
    </Master>
  )
}

export default component
