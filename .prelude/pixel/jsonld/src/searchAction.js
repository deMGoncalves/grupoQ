import jsonld from "./jsonld"

jsonld.push({
  '@id': '#searchaction',
  '@type': 'SearchAction',
  'query-input': 'required name=search_term_string',
  target: {
    '@type': 'EntryPoint',
    urlTemplate: 'https://grupoq.store/search?q={search_term_string}'
  }
})
