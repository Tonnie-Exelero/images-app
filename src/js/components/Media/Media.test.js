import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import configureStore from "redux-mock-store"
import Media from "./Media"

const mockStore = configureStore([])

describe("Media", () => {
  let store
  let component

  const getWrapper = () => {
    beforeEach(() => {
      store = mockStore({
        media: {
          id: "fueah8393",
          type: "image",
          statistics: {
            views: 0,
            downloads: 0,
            likes: 0,
            created: 0,
          },
          urls: {
            raw: "https://images/raw",
            full: "https://images/full",
            regular: "https://images/regular",
            small: "https://images/small",
          },
          owner: {
            id: "JmV2XH2xWtY",
            username: "samuelsngx",
          },
        },
      })

      component = renderer.create(
        <Provider store={store}>
          <Media />
        </Provider>
      )
    })
  }

  it("renders the snapshot", () => {
    const component = renderer.create(<Media />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it("renders an image", () => {
    const wrapper = getWrapper()

    expect(wrapper.find("img").length).toBe(1)
  })
})
