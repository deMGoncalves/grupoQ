import h from '@grupoq/h'
import Logo from '@grupoq/logo'
import style from './style'

function component () {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <Logo />
      </div>
    </header>
  )
}

export default component
