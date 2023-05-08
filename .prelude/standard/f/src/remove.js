import curry from './curry'

function remove (arrayRef, value) {
  return arrayRef.splice(arrayRef.indexOf(value), 1)
}

export default curry(remove)
