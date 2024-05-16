const createConcert = async (name: string, email: string, password: number | string) => {
  const body = JSON.stringify({
    name,
    email,
    password,
  });
  const response = await fetch(`http://localhost:3001/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
    body,
  });
  // const payload = await response.json();
  return response;
};

export default createConcert;
