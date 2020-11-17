import * as actions from "./index"

describe("actions", () => {
  it("should create an action to fetch posts", () => {
    const expectedAction = {
      type: "POSTS_REQUESTED",
      payload: {
        url: undefined,
      },
    }
    expect(actions.getPostsData()).toEqual(expectedAction)
  })

  it("should create an action to fetch users", () => {
    const expectedAction = {
      type: "USERS_REQUESTED",
      payload: {
        url: undefined,
      },
    }
    expect(actions.getUsersData()).toEqual(expectedAction)
  })

  it("should create an action to fetch media", () => {
    const expectedAction = {
      type: "MEDIA_REQUESTED",
      payload: {
        url: undefined,
      },
    }
    expect(actions.getMediaData()).toEqual(expectedAction)
  })
})
