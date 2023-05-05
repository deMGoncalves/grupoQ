import env from '@grupoq/env'

window.addEventListener('load', function () {
  env.production && (
    navigator
      .serviceWorker
      .register(new URL('./sw', import.meta.url /* webpackChunkName: "sw" */))
  )
})
