import { urlFor } from '@grupoq/router'
import grupoQ from './grupoQ.png'
import jsonld from '@grupoq/jsonld'
import middleware from '@grupoq/middleware'

export default middleware(function () {
  jsonld.push({
    '@id': '#organization',
    '@type': 'Organization',
    logo: grupoQ,
    name: 'Grupo Q',
    url: urlFor('home')
  })
})
