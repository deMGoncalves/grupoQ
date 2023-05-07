import { urlFor } from '@grupoq/router'
import Button from '@grupoq/button'
import h from '@grupoq/h'

function component (_props, children) {
  return (
    <Button onClick={() => location.assign(urlFor('checkout'))}>Pay {children}</Button>
  )
}

export default component
