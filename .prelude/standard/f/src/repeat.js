import curry from './curry'

function repeat (n, value) {
  return Array(n).fill(value)
}

export default curry(repeat)
