import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import configureStore from "redux-mock-store"
import User from "./User"

const mockStore = configureStore([])

describe("User", () => {
  let store
  let component

  const getWrapper = () => {
    beforeEach(() => {
      store = mockStore({
        user: {
          id: "JmV2XH2xWtY",
          username: "samuelsngx",
          first_name: "John",
          last_name: "Doe",
          profile_images: {
            small: "https://images/small",
            medium: "https://images/medium",
            large: "https://images/large",
          },
        },
      })

      component = renderer.create(
        <Provider store={store}>
          <User />
        </Provider>
      )
    })
  }

  it("renders the snapshot", () => {
    const component = renderer.create(<User />)
    
    expect(component.toJSON()).toMatchSnapshot()
  })

  it("renders user details", () => {
    const wrapper = getWrapper()

    expect(wrapper.find("div").first().props().on).toContain('className="c-users--user"')
  })
})
