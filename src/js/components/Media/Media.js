import React, { Component } from "react"
import { connect } from "react-redux"
import { getMediaData } from "../../redux/actions"
import "./Media.scss"

/**
 * Class that fetches and displays media.
 *
 * @class
 */
class Media extends Component {
  // Make API call.
  componentDidMount() {
    const media = this.props.mediaId

    if (media) {
      this.props.getMediaData(
        "https://api.slstice.com/mock/medias/" +
          media +
          "?api_key=ZSTYF0GBSSF0l3Ou6DTPE"
      )
    }
  }

  // Render the component.
  render() {
    if (this.props.state.error) {
      return <h1>Something went wrong.</h1>
    }
    return <img src={this.props.state.media.urls.raw} />
  }
}

// Function to connect to the state.
function mapStateToProps(state) {
  return {
    state,
  }
}

export default connect(mapStateToProps, { getMediaData })(Media)
