import env from '@grupoq/env'

window.addEventListener('load', function () {
  env.production && (
    navigator
      .serviceWorker
      .register('https://grupoq.store/sw.js')
  )
})
