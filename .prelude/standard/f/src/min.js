import arity from './arity'
import curry from './curry'

function min (...args) {
  return Math.min(...args)
}

export default curry(arity(2, min))
