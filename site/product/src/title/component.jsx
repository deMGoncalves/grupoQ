import h from '@grupoq/h'
import style from './style'
import text from '@grupoq/text'

function component (title) {
  return (
    <section className={style.title__container}>
      <text.H1 master dark md highlight bold>{title.content}</text.H1>
    </section>
  )
}

export default component
