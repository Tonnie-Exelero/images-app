import React, { Fragment, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { getUser } from "../../services/user"
import { setUser } from "../../redux/actions"
import { selectUserByUsername } from "./UserSlice"

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  order: 1;
`

const Username = styled.div`
  margin: auto 0.6em;
  opacity: 0.6;
  font-size: 0.8rem;
`

const User = (props) => {
  const { username } = props
  const dispatch = useDispatch()
  const selectUser = useMemo(() => selectUserByUsername(username), [username])
  const user = useSelector(selectUser)

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
        <Container>
          <Username>
            {user.first_name} {user.last_name}
          </Username>
          <img src={user.profile_images.small} width="24" height="24" alt="Avatar" />
        </Container>
      ) : (
        <div>No user to display</div>
      )}
    </Fragment>
  )
}

export default User
