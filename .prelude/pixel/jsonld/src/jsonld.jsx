import h, { render } from '@grupoq/h'

function push (...graphs) {
  requestAnimationFrame(() => (
    render(
      document.body,
      <script type='application/ld+json'>
        {
          JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': graphs,
            '@type': 'Schema'
          })
        }
      </script>
    )
  ))
}

export default {
  push
}
