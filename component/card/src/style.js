import styled from '@grupoq/styled'

export default styled`
  .card {
    background-color: var(--color-pure-white);
    border-radius: var(--border-radius-sm);
    content-visibility: auto;
    cursor: pointer;
    padding: var(--spacing_inset-xs);
  }

  .card__img {
    aspect-ratio: 3 / 4;
    object-fit: contain;
    width: 100%;
  }
`
