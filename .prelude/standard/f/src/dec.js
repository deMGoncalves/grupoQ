import arity from './arity'
import curry from './curry'

function dec (n = 0) {
  return n - 1
}

export default curry(arity(1, dec))
