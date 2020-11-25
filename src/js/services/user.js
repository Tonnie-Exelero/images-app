export function getUser(username) {
  return fetch(
    "https://api.slstice.com/mock/users/" + username + "?api_key=ZSTYF0GBSSF0l3Ou6DTPE"
  )
    .then((data) => data.json())
    .catch((error) => console.log(error))
}
