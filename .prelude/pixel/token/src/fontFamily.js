import { isUser } from '@grupoq/agent'
import h, { Fragment, render } from '@grupoq/h'
import styled from '@grupoq/styled'

isUser && (
  render(
    document.head,
    <>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' async />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap' async />
    </>
  )
)

export default styled`
  :root {
    --font-family-highlight: 'Roboto Condensed', Helvetica, sans-serif;
    --font-family-base: 'Roboto', Helvetica, sans-serif;
  }
`
