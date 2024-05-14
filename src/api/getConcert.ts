const getConcert = async () => {
  const response = await fetch(`http://localhost:3001/concert`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
  const payload = await response.json();
  return payload;
};

export default getConcert;
