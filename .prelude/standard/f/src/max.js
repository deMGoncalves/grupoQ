import arity from './arity'
import curry from './curry'

function max (...args) {
  return Math.max(...args)
}

export default curry(arity(2, max))
