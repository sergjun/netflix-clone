export const getFilmById = async (id) => {
  const data = await fetch(`https:/api.tvmaze.com/shows/${id}`)
  const response = await data.json()
  return response;
}

export const getFilms = async () => {
  const data = await fetch("https:/api.tvmaze.com/shows");
  const response = await data.json()
  return response;
}