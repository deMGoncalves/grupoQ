import styled from '@grupoq/styled'

export default styled`
  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
  }

  @media (min-width: 769px) {
    .card__container {
      float: right;
      margin-top: var(--spacing_inset-xs);
      width: calc(60% - 8px);
    }
  }
`
