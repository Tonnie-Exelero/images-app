import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import breakpoint from "../../common/breakpoints"
import { getPosts } from "../../services/posts"
import { setPosts } from "../../redux/actions"
import Media from "../Media/Media"
import User from "../Users/User"

const Content = styled.div`
  .c-posts--image {
    flex-basis: 100%;
    order: 1;
    margin-top: 3rem;
  }

  .c-posts--post-content {
    flex-basis: 100%;
    order: 2;

    .c-posts--post {
      margin-top: 50%;

      .c-posts--title {
        font-weight: 600;
      }

      .c-posts--description {
        font-size: 0.8em;
        font-weight: 300;
        opacity: 0.6;
      }
    }

    .c-posts--meta {
      margin-top: 40%;

      .c-posts--likes {
        display: flex;
        font-size: 0.8em;

        img {
          margin-right: 0.4em;
        }

        .c-posts--likes-count {
          margin-top: auto;
          opacity: 0.7;
        }
      }

      .c-posts--date {
        margin-top: 2em;
        font-size: 0.6em;
        opacity: 0.6;
      }
    }
  }

  @media only screen and ${breakpoint.device.desktop} {
    .c-posts--image {
      flex-basis: 60%;
    }

    .c-posts--post-content {
      flex-basis: 40%;

      .c-posts--post {
        margin-top: 70%;

        .c-posts--meta {
          margin-top: 70%;
        }
      }
    }
  }
`

const Posts = (props) => {
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true

    getPosts().then((items) => {
      if (mounted) {
        dispatch(setPosts(items.response.posts))
      }
    })

    return () => (mounted = false)
  }, [dispatch])

  return (
    <Fragment>
      {posts ? (
        posts.map((post) => (
          <Content key={post.id}>
            <div className="c-posts--image">
              <Media mediaId={post.mediaId} />
            </div>
            <div className="c-posts--post-content">
              <User username={post.user.username} />
              <div className="c-posts--post">
                <div className="c-posts--title">{post.title || "No post title"}</div>
                <div className="c-posts--description">
                  {post.description || "No description"}
                </div>
              </div>
              <div className="c-posts--meta">
                <div className="c-posts--likes">
                  <img
                    src="http://localhost:3000/images/facebook.png"
                    width="16"
                    height="16"
                    alt="facebook"
                  />
                  <div className="c-posts--likes-count">
                    {" " + post.likes} likes
                  </div>
                </div>
                <div className="c-posts--date">
                  {new Date(post.created).toDateString()}
                </div>
              </div>
            </div>
          </Content>
        ))
      ) : (
        <div>No posts to display</div>
      )}
    </Fragment>
  )
}

export default Posts
