import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../services/posts"
import { setPosts } from "../../redux/actions"
import Media from "../Media/Media"
import User from "../Users/User"
import "./Post.scss"

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
          <div key={post.id} className="c-posts--content">
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
          </div>
        ))
      ) : (
        <div>No posts to display</div>
      )}
    </Fragment>
  )
}

export default Posts
