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
    const user = this.props.username

    if (user) {
      this.props.getUsersData(
        "https://api.slstice.com/mock/users/" +
          user +
          "?api_key=ZSTYF0GBSSF0l3Ou6DTPE"
      )
    }
  }

  // Render the component.
  render() {
    if (this.props.state.error) {
      return <h1>Something went wrong.</h1>
    }

    return (
      <div className="c-users--user">
        <div className="c-users--name">
          {this.props.state.user.first_name} {this.props.state.user.last_name}
        </div>
        <div className="c-users--avatar">
          <img
            src={this.props.state.user.profile_images.small}
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
    state,
  }
}

export default connect(mapStateToProps, { getUsersData })(User)
