import styled from '@grupoq/styled'

export default styled`
  .product {
    background-color: var(--color-pure-white);
    border-radius: var(--border-radius-sm);
    content-visibility: auto;
    padding: var(--spacing_inset-xs);
    position: relative;
  }

  .product__image {
    aspect-ratio: 3 / 4;
    float: left;
    object-fit: contain;
    padding: var(--spacing_inset-xs);
    width: calc(30% - 8px);
  }

  .product__title,
  .product__price,
  .product__remove {
    float: right;
    width: calc(70% - 8px);
  }

  .product__remove {
    margin-top: var(--spacing_inset-xs);
  }
`
