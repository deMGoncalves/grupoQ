import h from '@grupoq/h'
import Img from '@grupoq/img'
import style from './style'

function component (image) {
  return (
    <section className={style.image__container}>
      <Img className={style.image} src={image.url} />
    </section>
  )
}

export default component
