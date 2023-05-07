import curry from './curry'
import magic from './magic'

function sum (_a) {
  return [...arguments].reduce((x, y) => (x + y), 0)
}

export default curry(magic(sum))
