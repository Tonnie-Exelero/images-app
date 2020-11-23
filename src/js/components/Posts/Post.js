import React, { Component } from "react"
import { connect } from "react-redux"
import { getPostsData } from "../../redux/actions"
import Image from "../Media/Media"
import User from "../Users/User"
import "./Post.scss"

/**
 * Class that fetches and displays posts.
 *
 * @class
 */
class Post extends Component {
  // Make API call.
  componentDidMount() {
    this.props.getPostsData(
      "https://api.slstice.com/mock/posts?offset=0&limit=15&api_key=ZSTYF0GBSSF0l3Ou6DTPE"
    )
  }

  // Render the component.
  render() {
    if (this.props.state.error) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.state.posts.map((post) => (
      <div key={post.id} className="c-posts--content">
        <div className="c-posts--image">
          {/* <Image mediaId={post.mediaId} /> */}
        </div>
        <div className="c-posts--post-content">
          <div className="c-posts--user">
            {/* <User username={post.user.username} /> */}
          </div>
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
              <div className="c-posts--likes-count">{" " + post.likes} likes</div>
            </div>
            <div className="c-posts--date">
              {new Date(post.created).toDateString()}
            </div>
          </div>
        </div>
      </div>
    ))
  }
}

// Function to connect to the state.
function mapStateToProps(state) {
  return {
    state,
  }
}

export default connect(mapStateToProps, { getPostsData })(Post)
