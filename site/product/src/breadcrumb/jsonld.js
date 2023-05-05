import { params, urlFor } from '@grupoq/router'
import global from '@grupoq/global'
import jsonld from '@grupoq/jsonld'
import middleware from '@grupoq/middleware'

export default middleware(function () {
  jsonld.push({
    '@id': '#item',
    '@type': 'ListItem',
    item: `https://grupoq.pages.dev${urlFor('product', params)}`,
    name: global.prduct?.title,
    position: 1
  })
})
