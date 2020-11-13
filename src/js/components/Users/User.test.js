import React from "react"
import renderer from "react-test-renderer"
import User from "./User"

describe("User", () => {
  it("renders the snapshot", () => {
    const component = renderer.create(<User />)
    
    expect(component.toJSON()).toMatchSnapshot()
  })
})
