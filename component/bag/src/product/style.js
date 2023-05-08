import styled from '@grupoq/styled'

export default styled`
  .product__image {
    aspect-ratio: 3 / 4;
    float: left;
    object-fit: contain;
    padding: var(--spacing_inset-xs);
    width: calc(30% - 8px);
  }

  .product__title,
  .product__price {
    float: right;
    width: calc(70% - 8px);
  }
`
