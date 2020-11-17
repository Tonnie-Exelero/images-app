import rootReducer from "./index"

describe("Images reducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual([
      {
        posts: [],
        user: {},
        media: {},
      },
    ])
  })

  it("should handle the requests", () => {
    expect(
      rootReducer([], {
        type: "POSTS_LOADED",
      })
    ).toEqual([
      {
        posts: [
          {
            id: "mQMp4Ie1Bh0",
            created: "2019-07-30T03:53:18-04:00",
            mediaId: "string",
            user: {
              id: "JmV2XH2xWtY",
              username: "samuelsngx",
            },
            likes: 0,
            title: "string",
            description: "string",
          },
        ],
        user: {},
        media: {},
      },
    ])

    expect(
      rootReducer(
        [
          {
            posts: [
              {
                id: "mQMp4Ie1Bh0",
                created: "2019-07-30T03:53:18-04:00",
                mediaId: "string",
                user: {
                  id: "JmV2XH2xWtY",
                  username: "samuelsngx",
                },
                likes: 0,
                title: "string",
                description: "string",
              },
            ],
            user: {},
            media: {},
          },
        ],
        {
          type: "USERS_LOADED",
        }
      )
    ).toEqual([
      {
        posts: [
          {
            id: "mQMp4Ie1Bh0",
            created: "2019-07-30T03:53:18-04:00",
            mediaId: "string",
            user: {
              id: "JmV2XH2xWtY",
              username: "samuelsngx",
            },
            likes: 0,
            title: "string",
            description: "string",
          },
        ],
        user: {
          id: "JmV2XH2xWtY",
          username: "samuelsngx",
          first_name: "string",
          last_name: "string",
          profile_images: {
            small: "string",
            medium: "string",
            large: "string",
          },
        },
        media: {},
      },
      {
        posts: [
          {
            id: "mQMp4Ie1Bh0",
            created: "2019-07-30T03:53:18-04:00",
            mediaId: "string",
            user: {
              id: "JmV2XH2xWtY",
              username: "samuelsngx",
            },
            likes: 0,
            title: "string",
            description: "string",
          },
        ],
        user: {},
        media: {},
      },
    ])
  })
    
    expect(
      rootReducer(
        [
          {
            posts: [
              {
                id: "mQMp4Ie1Bh0",
                created: "2019-07-30T03:53:18-04:00",
                mediaId: "string",
                user: {
                  id: "JmV2XH2xWtY",
                  username: "samuelsngx",
                },
                likes: 0,
                title: "string",
                description: "string",
              },
            ],
            user: {
              id: "JmV2XH2xWtY",
              username: "samuelsngx",
              first_name: "string",
              last_name: "string",
              profile_images: {
                small: "string",
                medium: "string",
                large: "string",
              },
            },
            media: {},
          },
        ],
        {
          type: "MEDIA_LOADED",
        }
      )
    ).toEqual([
      {
        posts: [
          {
            id: "mQMp4Ie1Bh0",
            created: "2019-07-30T03:53:18-04:00",
            mediaId: "string",
            user: {
              id: "JmV2XH2xWtY",
              username: "samuelsngx",
            },
            likes: 0,
            title: "string",
            description: "string",
          },
        ],
        user: {
          id: "JmV2XH2xWtY",
          username: "samuelsngx",
          first_name: "string",
          last_name: "string",
          profile_images: {
            small: "string",
            medium: "string",
            large: "string",
          },
        },
        media: {
          id: "string",
          type: "image",
          statistics: {
            views: 0,
            downloads: 0,
            likes: 0,
            created: 0,
          },
          urls: {
            raw: "string",
            full: "string",
            regular: "string",
            small: "string",
          },
          owner: {
            id: "JmV2XH2xWtY",
            username: "samuelsngx",
          },
        },
      },
      {
        posts: [
          {
            id: "mQMp4Ie1Bh0",
            created: "2019-07-30T03:53:18-04:00",
            mediaId: "string",
            user: {
              id: "JmV2XH2xWtY",
              username: "samuelsngx",
            },
            likes: 0,
            title: "string",
            description: "string",
          },
        ],
        user: {
          id: "JmV2XH2xWtY",
          username: "samuelsngx",
          first_name: "string",
          last_name: "string",
          profile_images: {
            small: "string",
            medium: "string",
            large: "string",
          },
        },
        media: {},
      },
      {
        posts: [
          {
            id: "mQMp4Ie1Bh0",
            created: "2019-07-30T03:53:18-04:00",
            mediaId: "string",
            user: {
              id: "JmV2XH2xWtY",
              username: "samuelsngx",
            },
            likes: 0,
            title: "string",
            description: "string",
          },
        ],
        user: {},
        media: {},
      },
    ])
})
