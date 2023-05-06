import Bag from '@grupoq/bag'
import h, { Fragment } from '@grupoq/h'
import Header from '@grupoq/header'

function component (_master, children) {
  return (
    <>
      <Header />
      {children}
      <Bag />
    </>
  )
}

export default component
