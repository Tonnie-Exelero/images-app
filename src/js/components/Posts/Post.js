import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { getPostsData } from "../../redux/actions"
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
      "https://api.slstice.com/mock/posts?api_key=ZSTYF0GBSSF0l3Ou6DTPE"
    )
  }

  // Render the component.
  render() {
    return (
      <div className="c-posts--post-content">
        {this.props.posts.map((post) => (
          <Fragment key={post.id}>
            <div className="c-posts--post">
              <div className="c-posts--title">{post.title}</div>
              <div className="c-posts--description">{post.description}</div>
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
          </Fragment>
        ))}
      </div>
    )
  }
}

// Function to connect to the state.
function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10),
  }
}

export default connect(mapStateToProps, { getPostsData })(Post)
