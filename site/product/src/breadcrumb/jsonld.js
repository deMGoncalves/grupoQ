import { params, urlFor } from '@grupoq/router'
import interceptor from '@grupoq/interceptor'
import jsonld from '@grupoq/jsonld'

export default interceptor(function (args, next) {
  const [product] = args
  jsonld.push({
    '@id': '#item',
    '@type': 'ListItem',
    item: `https://grupoq.pages.dev${urlFor('product', params)}`,
    name: product.title,
    position: 1
  })
  return next(...args)
})
