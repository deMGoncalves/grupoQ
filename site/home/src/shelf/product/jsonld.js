import jsonld from '@grupoq/jsonld'
import interceptor from '@grupoq/interceptor'

export default interceptor(function (args, next) {
  const [product] = args
  jsonld.push({
    '@id': `#${product.id}`,
    '@type': 'Product',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.rate,
      reviewCount: product.rating.count
    },
    category: product.category,
    description: product.description,
    image: product.image,
    mainEntityOfPage: {
      '@id': '#webpage'
    },
    name: product.title,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: product.price,
      priceValidUntil: new Date().toJSON().slice(0, 10),
      itemCondition: 'http://schema.org/NewCondition',
      availability: 'http://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Grupo Q'
      }
    }
  })
  return next(...args)
})
