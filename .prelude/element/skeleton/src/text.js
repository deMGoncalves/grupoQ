import * as f from '@grupoq/f'
import { size } from '@grupoq/polished'
import styled from '@grupoq/styled'

export default styled.span`
  background-color: var(--color-master-light);
  border-radius: var(--border-radius-pill);
  display: inline-block;
  height: ${size};
  width: ${() => f.random(34, 89)}%;
`
