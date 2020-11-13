import React from "react"
import renderer from "react-test-renderer"
import Image from "./Image"

describe("Image", () => {
  it("renders the snapshot", () => {
    const component = renderer.create(<Image />)
    
    expect(component.toJSON()).toMatchSnapshot()
  })
})
