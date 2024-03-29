import styled from '@grupoq/styled'

export default styled`
  .image {
    aspect-ratio: 3 / 4;
    object-fit: contain;
    padding: var(--spacing_inset-md);
    width: 100%;
  }

  .image__container {
    background-color: var(--color-pure-white);
    border-radius: var(--border-radius-sm);
  }

  @media (min-width: 769px) {
    .image__container {
      float: left;
      width: calc(40% - 8px);
    }
  }
`
