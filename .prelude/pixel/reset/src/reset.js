import styled from '@grupoq/styled'

export default styled`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scrollbar-width: none;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    user-select: none;
  }

  body {
    background-color: var(--color-master-lightest);
  }

  button {
    cursor: pointer;
    user-select: none;
  }

  ul {
    list-style: none;
  }
`
