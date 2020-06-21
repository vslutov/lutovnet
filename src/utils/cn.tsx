import React from "react"

export const appendCN = (...cns: Array<string | undefined>): string =>
  cns.filter((s) => s != null && s !== "").join(" ")

const cn = (tag: any, baseClassName: string, initialProps?: any) => {
  const WithClass = (
    { as, className, children, ...props }:
    { as?: any, className?: string, children?: React.ReactNode } & any
  ) => {
    const Tag = as != null ? as : tag
    className = appendCN(baseClassName, className)

    return <Tag {...initialProps} className={className} {...props}>{children}</Tag>
  }

  if (typeof tag === "string") {
    WithClass.displayName = `${tag} with class ${baseClassName}`
  } else if (tag?.displayName != null) {
    WithClass.displayName = `${tag.displayName} with class ${baseClassName}`
  }

  WithClass.cn = (Tag: any, appendClassName?: string) =>
    ({ className, ...props }: { className?: string} & any
    ) => {
      className = appendCN(appendClassName, className)
      return WithClass({ as: Tag, className, ...props })
    }

  return WithClass
}

export default cn
