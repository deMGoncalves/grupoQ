import styled from '@grupoq/styled'

export default styled`
  .product__main {
    padding: var(--spacing_inset-xs) 0;
  }

  @media (max-width: 768px) {
    .product__main div {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      position: relative;
    }
  }
`
