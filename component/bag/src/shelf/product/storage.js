import http from '@grupoq/http'
import magic from '@grupoq/magic'
import middleware from '@grupoq/middleware'

const storage = middleware(async function (product) {
  const { error, data } = await http.get(`${process.env.API_HOST}/products/${product.id}`).cache('force-cache').json()
  error
    ? product[storage.onError]?.(error)
    : product[storage.onResponse]?.(data)
})

Object.assign(storage, {
  onError: magic.product_onError,
  onResponse: magic.product_onResponse
})

export default storage
