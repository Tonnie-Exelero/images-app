import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMedia } from "../../services/media"
import { setMedia } from "../../redux/actions"
import "./Media.scss"

const Media = (props) => {
  const media = useSelector((state) => state.media)
  const { mediaId } = props
  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true

    getMedia(mediaId).then((data) => {
      if (mounted) {
        dispatch(setMedia(data.response.media))
      }
    })

    return () => (mounted = false)
  }, [mediaId, dispatch])

  return (
    <Fragment>{media ? <img src={media.urls.raw} /> : <div>No media to display</div>}</Fragment>
  )
}

export default Media
