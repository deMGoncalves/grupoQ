import echo from '@grupoq/echo'

function setTitle (content) {
  echo.emit('markup:setTitle', { content })
}

export default setTitle
