import h from '@grupoq/h'
import onError from './onError'

function component (props) {
  props = Object.assign({ alt: 'Grupo Q', loading: 'auto', src: 'fallback_1x1.png', onError }, props)
  return (
    <img {...props} />
  )
}

export default component
