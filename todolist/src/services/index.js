// funciones para nuestro CRUD 
const URLApi = "https://65273be9917d673fd76d827e.mockapi.io/tasks";

export async function create(body) {
  const response = await fetch(URLApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}

export async function read() {
  const response = await fetch(URLApi);
  const data = await response.json();
  return data;
}