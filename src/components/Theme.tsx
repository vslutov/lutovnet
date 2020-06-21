import React, { useState } from "react"

import styles from "./Theme.module.css"

const localStorage = typeof window !== "undefined" ? window?.localStorage
  : undefined

interface Props {
  className?: string
  children: React.ReactNode
}

type ThemeType = "dark" | "light"

export const ThemeContext = React.createContext<[ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>]>(["dark", () => {}])

export const nextTheme : Record<ThemeType, ThemeType> = {
  dark: "light",
  light: "dark"
}

const Theme = ({ children, className }: Props) => {
  const initialTheme =
    (localStorage?.getItem("theme") || "light") as ThemeType
  const [theme, setTheme] = useState<ThemeType>(initialTheme)
  if (localStorage && initialTheme !== theme) {
    localStorage.setItem("theme", theme)
  }

  className = `${className} ${styles[theme]}`

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default Theme
