import styled from '@grupoq/styled'

export default styled`
  .header {
    background-color: var(--color-pure-white);
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    padding: var(--spacing_inset-xs) 0;
  }

  .header__container {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
    justify-content: space-between;
  }
`
