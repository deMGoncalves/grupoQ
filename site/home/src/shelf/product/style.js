import styled from '@grupoq/styled'

export default styled`
  .product {
    background-color: var(--color-pure-white);
    border-radius: var(--border-radius-sm);
    content-visibility: auto;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs);
  }

  .product__image {
    aspect-ratio: 3 / 4;
    object-fit: contain;
    padding: var(--spacing_inset-md);
    width: 100%;
  }
`
