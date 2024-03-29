import { repaint } from '@grupoq/h'
import echo from '@grupoq/echo'
import middleware from '@grupoq/middleware'
import magic from '@grupoq/magic'

const action = middleware(function (bag) {
  echo.on('bag:add', () => bag[action.open]())
  echo.on('bag:open', () => bag[action.open]())
  echo.on('bag:update', () => bag[repaint.reflow]())
})

Object.assign(action, {
  open: magic.bag_open
})

export default action
