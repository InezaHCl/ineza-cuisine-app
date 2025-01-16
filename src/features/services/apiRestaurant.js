const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// 1. FETCH MENU DATA
export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch error won't throw an error on 400. So we will do it manually
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

// 2. FETCH ORDER
export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const data = await res.json();
  return data;
}

// 3. CREATE ORDER
export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

// 4.UPDATE ORDER
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // In this case we don't need data, so we don't return anything
  } catch {
    throw Error("Failed updating order");
  }
}
