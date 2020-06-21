import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"

import styles from "./Layout.module.css"

const IndexLayout: React.FC = ({ children }) => {
  const { title, description, keywords } = useStaticQuery(graphql`
    query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
  `).site.siteMetadata

  return (
    <Theme className={styles.root}>
      <Helmet
        title={title}
        meta={[
          { name: "description", content: description },
          { name: "keywords", content: keywords }
        ]}
      />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Theme>
  )
}

export default IndexLayout
