import { createSelector } from "reselect"

export const selectMediaById = mediaId => 
    createSelector(
        state => state.media,
        media => media.find(({ id }) => id === mediaId)
    )
