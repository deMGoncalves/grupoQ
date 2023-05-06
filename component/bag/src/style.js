import styled from '@grupoq/styled'

export default styled`
  .bag__header {
    background-color: var(--color-pure-white);
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    padding: var(--spacing_inset-xs) 0;
  }

  .bag__back {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    height: 42px;
    justify-content: center;
    position: relative;
    width: 42px;
  }

  .bag__icon {
    aspect-ratio: 1 / 1;
    width: 24px;
  }
`
