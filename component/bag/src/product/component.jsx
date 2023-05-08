import Card from './card'
import Command from './command'
import Count from './count'
import h from '@grupoq/h'
import Image from './image'
import Price from './price'
import Remove from './remove'
import Title from './title'
import Tools from './tools'

function component (product) {
  return (
    <Card>
      <Image src={product.image} />
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
      <Tools>
        <Command onClick={() => product.sub()}>-</Command>
        <Count>{product.count}</Count>
        <Command onClick={() => product.add()}>+</Command>
        <Remove onClick={() => product.remove()} />
      </Tools>
    </Card>
  )
}

export default component
