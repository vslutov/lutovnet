import styles from "./Button.module.css"
import cn, { appendCN } from "../utils/cn"

const Button = cn("button", styles.button)

type Color = "secondary"

export default ({ color, className, ...props }:
  { color?: Color, className?: string } & any) => {
  className = appendCN(className, styles[color])
  return Button({ className, ...props })
}
