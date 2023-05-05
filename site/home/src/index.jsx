import h, { render } from '@grupoq/h'
import Home from './home'
import router from '@grupoq/router'

router('/', function home () {
  // const { default: Home } = await import('./home' /* webpackChunkName: "home" */)
  render(document.body, <Home />)
})
