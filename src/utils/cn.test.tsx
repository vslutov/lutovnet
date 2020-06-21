/* eslint-env jest */

import React from "react"
import { render } from "enzyme"
import cn from "./cn"

describe("cn", () => {
  const MyDiv = (props: any) => <div {...props} />
  MyDiv.displayName = "MyDiv"

  const Span = cn("span", "MyClass")
  const Link = Span.cn("a")

  it("should render", () => {
    expect(render(<Span />)).toMatchSnapshot()
    expect(render(<Span className='addtional' />)).toMatchSnapshot()
    expect(render(<Span>hello</Span>)).toMatchSnapshot()
    expect(render(<Span as={MyDiv} />)).toMatchSnapshot()
    expect(render(<Span as='a' href='kek' />)).toMatchSnapshot()
  })

  it("should render as cn", () => {
    expect(render(<Link />)).toMatchSnapshot()
    expect(render(<Link className='addtional' />)).toMatchSnapshot()
    expect(render(<Link href='kek'>hello</Link>)).toMatchSnapshot()
    expect(render(<Link as='b' />)).toMatchSnapshot()
    expect(render(<Link as={MyDiv} />)).toMatchSnapshot()
  })

  it("should add classname on cn", () => {
    const LeftLink = Span.cn("a", "left")
    expect(render(<LeftLink />)).toMatchSnapshot()
  })

  it("should get display name from component", () => {
    const DivWithClass = cn(MyDiv, "MyDiv")
    expect(render(<DivWithClass />)).toMatchSnapshot()
  })
})
