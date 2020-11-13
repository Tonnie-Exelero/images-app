import React, { Component, Fragment } from "react"
import Image from "../js/components/Images/Image"
import User from "./components/Users/User"
import Post from "./components/Posts/Post"
import "./App.scss"

class App extends Component {
    render() {
        return (
          <Fragment>
            <div className="c-images--image">
              <Image />
            </div>
            <div className="c-posts--content">
              <User />
              <Post />
            </div>
          </Fragment>
        )
    }
}

export default App
