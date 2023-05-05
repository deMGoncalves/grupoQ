import jsonld from './jsonld'

jsonld.push({
  '@id': '#breadcrumb',
  '@type': 'BreadcrumbList',
  itemListElement: {
    '@id': '#item'
  }
})

jsonld.push({
  '@id': '#item',
  '@type': 'ListItem',
  item: 'https://grupoq.store',
  name: 'grupoq',
  position: 0
})
