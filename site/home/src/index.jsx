import h, { render } from '@grupoq/h'
import router from '@grupoq/router'

router('/', async function home () {
  const { default: Home } = await import('./home' /* webpackChunkName: "home" */)
  render(document.body, <Home />)
})
