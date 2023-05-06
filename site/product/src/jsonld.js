import { params, urlFor } from '@grupoq/router'
import jsonld from '@grupoq/jsonld'
import interceptor from '@grupoq/interceptor'

export default interceptor(function (args, next) {
  const [product] = args
  jsonld.push({
    '@id': `#${product.id}`,
    '@type': 'Product',
    category: product.category,
    description: product.description,
    image: product.image,
    mainEntityOfPage: {
      '@id': '#webpage',
      '@type': 'WebPage',
      breadcrumb: {
        '@id': '#breadcrumb'
      },
      description: product.description,
      inLanguage: 'pt-BR',
      isPartOf: {
        '@id': '#website'
      },
      name: product.title,
      url: urlFor('product', params)
    },
    name: global.product?.title,
    offers: {
      '@id': '#offers'
    }
  })
  return next(...args)
})
