import h from '@grupoq/h'
import style from './style'
import text from '@grupoq/text'

function component (description) {
  return (
    <section className={style.description__container}>
      <text.P master xxxs>{description.content}</text.P>
    </section>
  )
}

export default component
