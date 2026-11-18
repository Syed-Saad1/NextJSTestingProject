export async function getUsers({ signal } = {}) {
  const response = await fetch(
    "https://randomuser.me/api/?results=1000&seed=cache-demo",
    { signal },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  if (data.error) throw new Error(data.error);

  return data.results;
}
