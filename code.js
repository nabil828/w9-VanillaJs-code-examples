// fetch("https://yts.mx/api/v2/list_movies.json")
//   .then(
//     (resp) => {
//       return resp.json()
//     }
//   )
//   .then(
//     (input) => {
//       console.log(input);
//     }
//   )
//   .catch(
//     (err) => {
//       console.log(err);
//     }
//   )

fetch("https://yts.mx/api/v2/list_movies.json")
  .then(resp => resp.json())
  .then(resp => { console.log(resp) })
  .catch(err => { console.log(err) }
  )


// $.ajax({
//   "url": "https://yts.mx/api/v2/list_movies.json",
//   success: f1
// })