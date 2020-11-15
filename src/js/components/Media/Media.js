import React, { Component } from "react"
import { connect } from "react-redux"
import { getMediaData } from "../../redux/actions"
import "./Media.scss"

class Media extends Component {
  // Make API call.
  componentDidMount() {
    this.props.getMediaData(
      "https://api.slstice.com/mock/medias/" +
        this.props.posts.map((post) => post.mediaId)
    )
  }

  // Render the component.
  render() {
    return <img src={this.props.media.urls.full} />
  }
}

// Function to connect to the state.
function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10),
    media: state.media,
  }
}

export default connect(mapStateToProps, { getMediaData })(Media)
