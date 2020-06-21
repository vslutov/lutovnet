import type { PageProps } from "gatsby"

import * as React from "react"

import Container from "../components/Container"
import IndexLayout from "../layouts"

type Props = PageProps<{}, {
  frontmatter: {
    title: string
  }
}>

export default ({ children, pageContext: { frontmatter: { title } } }: Props) => {
  return (
    <IndexLayout>
      <Container>
        <h1>{title}</h1>
        {children}
      </Container>
    </IndexLayout>
  )
}
