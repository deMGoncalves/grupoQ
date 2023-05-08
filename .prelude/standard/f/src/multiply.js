import arity from './arity'
import curry from './curry'

function multiply (...args) {
  return args.reduce((x, y) => (x * y))
}

export default curry(arity(2, multiply))
