import back from './back.png'
import container from '@grupoq/container'
import h from '@grupoq/h'
import Img from '@grupoq/img'
import Side from '@grupoq/side'
import style from './style'

function component (bag) {
  return (
    <Side onClose={() => bag.close()} opened={bag.opened}>
      <header className={style.bag__header}>
        <container.Div>
          <button className={style.bag__back} onClick={() => bag.close()}>
            <Img className={style.bag__icon} src={back} />
          </button>
        </container.Div>
      </header>
    </Side>
  )
}

export default component
