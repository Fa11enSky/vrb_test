const filterByTitle = (query, data) => {
  return data.filter((el) =>
    el.title.toLowerCase().includes(query.trim().toLowerCase())
  );
};

export default filterByTitle;
