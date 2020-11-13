import React, { Component } from "react"
import { connect } from "react-redux"
import { getMediaData } from "../../actions/index"
import "./Image.scss"

class Image extends Component {
  componentDidMount() {
    this.props.getMediaData(
      "https://virtserver.swaggerhub.com/tonnieexelero/Images/1.0.0/medias/" +
        this.props.posts.map((post) => post.mediaId)
    )
  }

  render() {
    return <img src={this.props.media.urls.full} />
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10),
    media: state.media,
  }
}

export default connect(mapStateToProps, { getMediaData })(Image)
