const getFriendList = (data = {}) => {
  const { page, results } = data;
  const url = `https://randomuser.me/api/?seed=lll${
    page ? `&page=${page}` : ""
  }${results ? `&results=${results}` : ""}`;
  return fetch(url)
    .then((response) => response.json())
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log("error getWTPProfile", error);
    });
};

export { getFriendList };
