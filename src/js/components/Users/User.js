import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../services/user"
import { setUser } from "../../redux/actions"
import "./User.scss"

const User = (props) => {
  const { username } = props
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true

    getUser(username).then((data) => {
      if (mounted) {
        dispatch(setUser(data.response.user))
      }
    })

    return () => (mounted = false)
  }, [username, dispatch])

  return (
    <Fragment>
      {user ? (
        <div className="c-users--user">
          <div className="c-users--name">
            {user.first_name} {user.last_name}
          </div>
          <div className="c-users--avatar">
            <img
              src={user.profile_images.small}
              width="24"
              height="24"
              alt="Avatar"
            />
          </div>
        </div>
      ) : (
        <div>No user to display</div>
      )}
    </Fragment>
  )
}

export default User
