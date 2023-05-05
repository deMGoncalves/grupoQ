import styled from '@grupoq/styled'

export default styled`
  .shelf {
    display: grid;
    gap: var(--spacing_inset-xs);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    .shelf {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 961px) {
    .shelf {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
