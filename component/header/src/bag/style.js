import styled from '@grupoq/styled'

export default styled`
  .bag {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    height: 42px;
    justify-content: center;
    position: relative;
    width: 42px;
  }

  .bag__icon {
    aspect-ratio: 1 / 1;
    width: 24px;
  }

  .bag__count {
    position: absolute;
    right: 0;
    top: 0;
  }
`
