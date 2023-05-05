import h from '@grupoq/h'
import Header from './header'
import Headline from './headline'
import Leading from './leading'
import Logo from '@grupoq/logo'
import Row from './row'
import Trailing from './trailing'

function component () {
  return (
    <Header>
      <Row>
        <Leading>
          <Logo />
        </Leading>
        <Headline />
        <Trailing />
      </Row>
    </Header>
  )
}

export default component
