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
  .product__tools {
    float: right;
    width: calc(70% - 8px);
  }

  .product__tools {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
    margin-top: var(--spacing_inset-xs);
  }

  .product__button {
    align-items: center;
    background-color: var(--color-master-lighter);
    border: none;
    border-radius: var(--border-radius-circular);
    display: flex;
    height: 32px;
    justify-content: center;
    line-height: 0;
    width: 32px;
  }
`
