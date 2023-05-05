import echo from '@grupoq/echo'

function setDescription (content) {
  echo.emit('markup:setDescription', { content })
}

export default setDescription
