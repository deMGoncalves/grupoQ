import h, { render } from '@grupoq/h'
import Product from './product'
import router from '@grupoq/router'

router('/:id', function product () {
  // const { default: Product } = await import('./product' /* webpackChunkName: "product" */)
  render(document.body, <Product />)
})
