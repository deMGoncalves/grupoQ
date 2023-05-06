import h, { render } from '@grupoq/h'
import router from '@grupoq/router'

router('/checkout', async function checkout () {
  const { default: Checkout } = await import('./checkout' /* webpackChunkName: "checkout" */)
  render(document.body, <Checkout />)
})
