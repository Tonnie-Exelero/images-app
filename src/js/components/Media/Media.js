import React, { Fragment, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { getMedia } from "../../services/media"
import { setMedia } from "../../redux/actions"
import { selectMediaById } from "./MediaSlice"

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Media = (props) => {
  const { mediaId } = props
  const dispatch = useDispatch()
  const selectMedia = useMemo(() => selectMediaById(mediaId), [mediaId])
  const media = useSelector(selectMedia)

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
    <Fragment>
      {media ? <Image src={media.urls.raw} /> : <div>No image to display</div>}
    </Fragment>
  )
}

export default Media
