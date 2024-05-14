const createConcert = async (concertName: string, description: string, limit: number | string) => {
  const body = JSON.stringify({
    name: concertName,
    description,
    limit,
  });
  console.log(body);
  const response = await fetch(`http://localhost:3001/concert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
    body,
  });
  const payload = await response.json();
};

export default createConcert;
