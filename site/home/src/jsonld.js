import { urlFor } from '@grupoq/router'
import jsonld from '@grupoq/jsonld'
import middleware from '@grupoq/middleware'

export default middleware(function () {
  jsonld.push({
    '@id': '#webpage',
    '@type': 'WebPage',
    description: 'A plataforma prática para o preparo para concursos públicos, que integra todas as etapas do estudo. Com 450 mil assinantes, é a maior edtech do Brasil.',
    inLanguage: 'pt-BR',
    isPartOf: {
      '@id': '#website'
    },
    name: 'Grupo Q',
    url: urlFor('home')
  })
})
