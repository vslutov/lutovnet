import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GitHub } from "react-bytesize-icons"

import Left from "./Left"
import styles from "./Footer.module.css"

const Footer = () => {
  const { author, copyright, srcUrl } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            email
            name
            url
          }
          copyright
          srcUrl
        }
      }
    }
  `).site.siteMetadata

  return (
    <footer className={styles.footer}>
      <Left>
        {author.name} &lt;
        <a href={`mailto:${author.email}?subject=From%20contact%20me`}>{author.email}</a>
        &gt; &copy; {copyright}
      </Left>
      <a href={srcUrl}>
        Fork me <GitHub width={12} height={12} />
      </a>
    </footer>
  )
}

export default Footer
