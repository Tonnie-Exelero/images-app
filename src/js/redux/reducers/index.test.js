import rootReducer from "./index"

describe("Images reducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual({
      posts: [],
      user: {},
      media: {},
    })
  })

  it("should handle the requests", () => {
    expect(
      rootReducer([], {
        type: "POSTS_LOADED",
      })
    ).toEqual({
      posts: [
        {
          id: "fuhU4o7jrE4",
          created: "2020-10-12T14:00:20-04:00",
          mediaId:
            "MTkzNGRiMGZiYjhlZjk2YTE5ZTQ1ZjAwMDczYzdlMDAyMWE0NWE2NTo0NTNiMDc0NzdiZGUzNmEyOjA3TFZldy9KaXVFTWFpYWRLckNyaHc9PQ==",
          user: {
            id: "eySMK9KwmJU",
            username: "samsungmemory",
          },
          likes: 34,
          title: null,
          description: null,
        },
      ],
      user: {},
      media: {},
    })

    expect(
      rootReducer(
        [
          {
            posts: [
              {
                id: "fuhU4o7jrE4",
                created: "2020-10-12T14:00:20-04:00",
                mediaId:
                  "MTkzNGRiMGZiYjhlZjk2YTE5ZTQ1ZjAwMDczYzdlMDAyMWE0NWE2NTo0NTNiMDc0NzdiZGUzNmEyOjA3TFZldy9KaXVFTWFpYWRLckNyaHc9PQ==",
                user: {
                  id: "eySMK9KwmJU",
                  username: "samsungmemory",
                },
                likes: 34,
                title: null,
                description: null,
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
    ).toEqual(
      {
        posts: [
          {
            id: "fuhU4o7jrE4",
            created: "2020-10-12T14:00:20-04:00",
            mediaId:
              "MTkzNGRiMGZiYjhlZjk2YTE5ZTQ1ZjAwMDczYzdlMDAyMWE0NWE2NTo0NTNiMDc0NzdiZGUzNmEyOjA3TFZldy9KaXVFTWFpYWRLckNyaHc9PQ==",
            user: {
              id: "eySMK9KwmJU",
              username: "samsungmemory",
            },
            likes: 34,
            title: null,
            description: null,
          },
        ],
        user: {
          id: "eySMK9KwmJU",
          username: "samsungmemory",
          first_name: "Samsung",
          last_name: "Memory",
          profile_images: {
            small:
              "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            medium:
              "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            large:
              "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
          },
        },
        media: {},
      },
      {
        posts: [
          {
            id: "fuhU4o7jrE4",
            created: "2020-10-12T14:00:20-04:00",
            mediaId:
              "MTkzNGRiMGZiYjhlZjk2YTE5ZTQ1ZjAwMDczYzdlMDAyMWE0NWE2NTo0NTNiMDc0NzdiZGUzNmEyOjA3TFZldy9KaXVFTWFpYWRLckNyaHc9PQ==",
            user: {
              id: "eySMK9KwmJU",
              username: "samsungmemory",
            },
            likes: 34,
            title: null,
            description: null,
          },
        ],
        user: {},
        media: {},
      }
    )
  })

  expect(
    rootReducer(
      [
        {
          posts: [
            {
              id: "fuhU4o7jrE4",
              created: "2020-10-12T14:00:20-04:00",
              mediaId:
                "MTkzNGRiMGZiYjhlZjk2YTE5ZTQ1ZjAwMDczYzdlMDAyMWE0NWE2NTo0NTNiMDc0NzdiZGUzNmEyOjA3TFZldy9KaXVFTWFpYWRLckNyaHc9PQ==",
              user: {
                id: "eySMK9KwmJU",
                username: "samsungmemory",
              },
              likes: 34,
              title: null,
              description: null,
            },
          ],
          user: {
            id: "eySMK9KwmJU",
            username: "samsungmemory",
            first_name: "Samsung",
            last_name: "Memory",
            profile_images: {
              small:
                "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              medium:
                "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              large:
                "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
            },
          },
          media: {},
        },
      ],
      {
        type: "MEDIA_LOADED",
      }
    )
  ).toEqual(
    {
      posts: [
        {
          id: "fuhU4o7jrE4",
          created: "2020-10-12T14:00:20-04:00",
          mediaId:
            "MTkzNGRiMGZiYjhlZjk2YTE5ZTQ1ZjAwMDczYzdlMDAyMWE0NWE2NTo0NTNiMDc0NzdiZGUzNmEyOjA3TFZldy9KaXVFTWFpYWRLckNyaHc9PQ==",
          user: {
            id: "eySMK9KwmJU",
            username: "samsungmemory",
          },
          likes: 34,
          title: null,
          description: null,
        },
      ],
      user: {
        id: "eySMK9KwmJU",
        username: "samsungmemory",
        first_name: "Samsung",
        last_name: "Memory",
        profile_images: {
          small:
            "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
          medium:
            "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
          large:
            "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
        },
      },
      media: {
        id:
          "MDM3NjRmZmNiYmRmNjYxNmQxMTIzNjhhODgxZWI4ZDNkZTMwN2QwYzo4NzBhNDQyMTljNTE3MzcxOnV4S2dmV1JXa1Z5R3pCZ1hEUHFmdFE9PQ==",
        type: "image",
        statistics: {
          views: 1023916,
          downloads: 5372,
          likes: 34,
          created: 1602525620,
        },
        urls: {
          raw:
            "https://images.unsplash.com/photo-1602524816765-67313fa3ef54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3NjMyfQ",
          full:
            "https://images.unsplash.com/photo-1602524816765-67313fa3ef54?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3NjMyfQ",
          regular:
            "https://images.unsplash.com/photo-1602524816765-67313fa3ef54?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3NjMyfQ",
          small:
            "https://images.unsplash.com/photo-1602524816765-67313fa3ef54?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3NjMyfQ",
          thumb:
            "https://images.unsplash.com/photo-1602524816765-67313fa3ef54?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3NjMyfQ",
        },
        owner: {
          id: "eySMK9KwmJU",
          username: "samsungmemory",
        },
      },
    },
    {
      posts: [
        {
          id: "fuhU4o7jrE4",
          created: "2020-10-12T14:00:20-04:00",
          mediaId:
            "MTkzNGRiMGZiYjhlZjk2YTE5ZTQ1ZjAwMDczYzdlMDAyMWE0NWE2NTo0NTNiMDc0NzdiZGUzNmEyOjA3TFZldy9KaXVFTWFpYWRLckNyaHc9PQ==",
          user: {
            id: "eySMK9KwmJU",
            username: "samsungmemory",
          },
          likes: 34,
          title: null,
          description: null,
        },
      ],
      user: {
        id: "eySMK9KwmJU",
        username: "samsungmemory",
        first_name: "Samsung",
        last_name: "Memory",
        profile_images: {
          small:
            "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
          medium:
            "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
          large:
            "https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
        },
      },
      media: {},
    },
    {
      posts: [
        {
          id: "fuhU4o7jrE4",
          created: "2020-10-12T14:00:20-04:00",
          mediaId:
            "MTkzNGRiMGZiYjhlZjk2YTE5ZTQ1ZjAwMDczYzdlMDAyMWE0NWE2NTo0NTNiMDc0NzdiZGUzNmEyOjA3TFZldy9KaXVFTWFpYWRLckNyaHc9PQ==",
          user: {
            id: "eySMK9KwmJU",
            username: "samsungmemory",
          },
          likes: 34,
          title: null,
          description: null,
        },
      ],
      user: {},
      media: {},
    }
  )
})
