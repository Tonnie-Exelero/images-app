import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import configureStore from "redux-mock-store"
import Post from "./Post"

const mockStore = configureStore([])

describe("Post", () => {
  let store
  let component

  const getWrapper = () => {
    beforeEach(() => {
      store = mockStore({
        posts: [
          {
            id: "mQMp4Ie1Bh0",
            created: "2019-07-30T03:53:18-04:00",
            mediaId: "https://media/image",
            user: {
              id: "JmV2XH2xWtY",
              username: "samuelsngx",
            },
            likes: 0,
            title: "My post",
            description: "This is a big description",
          },
        ],
      })

      component = renderer.create(
        <Provider store={store}>
          <Post />
        </Provider>
      )
    })
  }

  it("renders the snapshot", () => {
    const component = renderer.create(<Post />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it("renders a Post", () => {
    const wrapper = getWrapper()

    expect(wrapper.find("div").first().props().on).toContain(
      'className="c-posts--post-content"'
    )
  })
})
