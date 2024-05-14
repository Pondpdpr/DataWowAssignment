const getLog = async () => {
  const response = await fetch(`http://localhost:3001/reservation/log`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
  const payload = await response.json();
  return payload;
};

export default getLog;
