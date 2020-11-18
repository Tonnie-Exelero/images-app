import React, { Component } from "react"
import { connect } from "react-redux"
import { getUsersData } from "../../redux/actions"
import "./User.scss"

/**
 * Class that fetches and displays users. 
 * 
 * @class
 */
class User extends Component {
  // Make API call.
  componentDidMount() {
    this.props.getUsersData(
      "https://api.slstice.com/mock/users/" +
        this.props.posts.map((post) => post.user.username) +
        "?api_key=ZSTYF0GBSSF0l3Ou6DTPE"
    )
  }

  // Render the component.
  render() {
    return (
      <div className="c-users--user">
        <div className="c-users--name">
          {this.props.user.first_name} {this.props.user.last_name}
        </div>
        <div className="c-users--avatar">
          <img
            src={this.props.user.profile_images.small}
            width="24"
            height="24"
            alt="Avatar"
          />
        </div>
      </div>
    )
  }
}

// Function to connect to the state.
function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10),
    user: state.user,
  }
}

export default connect(mapStateToProps, { getUsersData })(User)
