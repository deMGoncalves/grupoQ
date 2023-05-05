import h from '@grupoq/h'
import mapper from './mapper'
import style from './style'

export default new Proxy({}, {
  get: (_, type) =>
    (props) =>
      h(mapper[type.toLowerCase()], { ...props, className: [style.skeleton, props.className] })
})
