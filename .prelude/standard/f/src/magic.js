import arity from './arity'
import magic from '@grupoq/magic'

export default function (functionRef) {
  const n = functionRef.length
  const method = magic[functionRef.name]
  const evaluate = (value) => (value?.[method]?.() ?? value)
  const interceptor = (...args) => functionRef(...args.map(evaluate))
  return arity(n, interceptor)
}
