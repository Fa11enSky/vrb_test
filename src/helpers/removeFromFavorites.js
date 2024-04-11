const removeFromFovorites = (title) => {
  const items = window.localStorage.getItem("favorites");
  if (!items) return;
  const movies = JSON.parse(items);
  const newList = movies.filter((el) => el.title !== title);
  localStorage.setItem("favorites", JSON.stringify(newList));
};
export default removeFromFovorites
