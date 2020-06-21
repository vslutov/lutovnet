import React, { useContext } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Moon, Menu } from "react-bytesize-icons"

import cn from "../utils/cn"

import Button from "./Button"
import Container from "./Container"
import { ThemeContext, nextTheme } from "./Theme"

import styles from "./Header.module.css"

const HeaderLink = cn(Link, styles.link, { activeClassName: styles.activeLink })
const Logo = cn(Link, styles.logo)

const Header = () => {
  const title = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title

  const [theme, setTheme] = useContext(ThemeContext)

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo to='/'>{title}</Logo>
        <HeaderLink to='/'>Blog</HeaderLink>
        <HeaderLink to='/about'>About</HeaderLink>
        <Button
          color='secondary'
          aria-label='menu' className={`${styles.button} ${styles.right}`}
        >
          <Menu width={16} height={16} strokeWidth='12.5%' />
        </Button>
        <Button
          onClick={() => setTheme(nextTheme[theme])} color='secondary'
          aria-label='change-theme' className={styles.button}
        >
          <Moon width={16} height={16} strokeWidth='12.5%' />
        </Button>
      </Container>
    </header>
  )
}

export default Header
