export function getMedia(mediaId) {
  return fetch(
    "https://api.slstice.com/mock/medias/" + mediaId + "?api_key=ZSTYF0GBSSF0l3Ou6DTPE"
  )
    .then((data) => data.json())
    .catch((error) => console.log(error))
}
