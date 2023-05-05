import h from '@grupoq/h'

function component (canonical) {
  return (
    <link rel='canonical' href={canonical.href} />
  )
}

export default component
