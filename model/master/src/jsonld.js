import jsonld from '@grupoq/jsonld'
import middleware from '@grupoq/middleware'

export default middleware(function () {
  jsonld.push({
    '@id': '#website',
    '@type': 'WebSite',
    description: 'A plataforma prática para o preparo para concursos públicos, que integra todas as etapas do estudo. Com 450 mil assinantes, é a maior edtech do Brasil.',
    name: 'Grupo Q',
    potentialAction: {
      '@id': '#searchaction',
      '@type': 'SearchAction',
      'query-input': 'required name=search_term_string',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://grupoq.pages.dev/search?q={search_term_string}'
      }
    },
    publisher: {
      '@id': '#organization'
    },
    url: 'https://grupoq.pages.dev'
  })
})
