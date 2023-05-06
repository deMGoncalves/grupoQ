import Bag from './bag'
import container from '@grupoq/container'
import h from '@grupoq/h'
import Logo from './logo'
import style from './style'

function component () {
  return (
    <header className={style.header}>
      <container.Div className={style.header__container}>
        <Logo />
        <Bag />
      </container.Div>
    </header>
  )
}

export default component
