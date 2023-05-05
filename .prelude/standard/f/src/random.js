import curry from './curry'

function random (min = 0, max = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default curry(random)
