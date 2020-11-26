import { createSelector } from "reselect"

export const selectUserByUsername = user =>
    createSelector(
        state => state.users,
        users => users.find(({ username }) => username === user)
    )
