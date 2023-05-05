import styled from '@grupoq/styled'

export default new Proxy({}, {
  get: (_target, key) =>
    styled[key]`
      margin: 0 auto;
      max-width: 1200px;
      padding: 0 var(--spacing_inset-xs);
      position: relative;
      width: 100%;
    `
})
