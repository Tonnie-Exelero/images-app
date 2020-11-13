import React from "react"
import renderer from "react-test-renderer"
import Post from "./Post"

describe("Post", () => {
  it("renders the snapshot", () => {
    const component = renderer.create(<Post />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
