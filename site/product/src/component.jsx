import h, { Fragment } from '@grupoq/h'
import Header from '@grupoq/header'
import Main from './main'
import Title from './title'

function component () {
  return (
    <>
      <Header />
      <Main>
        <Title />
      </Main>
    </>
  )
}

export default component
