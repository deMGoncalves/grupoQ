import echo from '@grupoq/echo'

function setcanonical (href) {
  echo.emit('markup:setCanonical', { href })
}

export default setcanonical
