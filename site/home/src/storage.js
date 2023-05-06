import http from '@grupoq/http'
import magic from '@grupoq/magic'
import middleware from '@grupoq/middleware'

const storage = middleware(async function (home) {
  const { error, data } = await http.get(`${process.env.API_HOST}/products`).cache('force-cache').json()
  error
    ? home[storage.onError]?.(error)
    : home[storage.onResponse]?.(data)
})

Object.assign(storage, {
  onError: magic.home_onError,
  onResponse: magic.home_onResponse
})

export default storage
