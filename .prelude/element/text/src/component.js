import * as p from '@grupoq/polished'
import styled from '@grupoq/styled'

const text = new Proxy({}, {
  get (_target, key) {
    return styled[key]`
      color: ${p.color};
      font-family: ${p.family};
      font-size: ${p.size};
      font-weight: ${p.weight};
      line-height: var(--line-height-lg);
    `
  }
})

export default text
