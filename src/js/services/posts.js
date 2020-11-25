export function getPosts() {
  return fetch("https://api.slstice.com/mock/posts?offset=0&limit=5&api_key=ZSTYF0GBSSF0l3Ou6DTPE")
    .then((data) => data.json())
    .catch((error) => console.log(error))
}
