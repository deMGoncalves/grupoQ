import { params, urlFor } from '@grupoq/router'
import jsonld from '@grupoq/jsonld'
import interceptor from '@grupoq/interceptor'

export default interceptor(function (args, next) {
  const [product] = args
  jsonld.push({
    '@id': '#webpage',
    '@type': 'WebPage',
    description: product.description,
    inLanguage: 'pt-BR',
    isPartOf: {
      '@id': '#website'
    },
    name: product.title,
    url: urlFor('product', params)
  })
  return next(...args)
})
