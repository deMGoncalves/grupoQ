import styled from '@grupoq/styled'

export default styled`
  .card {
    background-color: var(--color-pure-white);
    border-radius: var(--border-radius-sm);
    content-visibility: auto;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs);
  }

  .card__image {
    aspect-ratio: 3 / 4;
    object-fit: contain;
    width: 100%;
  }
`
