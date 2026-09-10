const baseUrl = "https://api.dsvkurs.miun.se";
const version = "v1";

const apiEndpointBase = `${baseUrl}/${version}`;
const token = localStorage.getItem("token");

export async function getRoomById(id) {
  try {
    const response = await fetch(`${apiEndpointBase}/rooms/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Status: ${error.status}`);
  }
}

export async function getCurrentGameState(gameId) {
  try {
    const response = await fetch(`${apiEndpointBase}/games/${gameId}/state`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Status: ${error.status}`);
  }
}

export async function getDiceRoll(gameId) {
  try {
    const response = await fetch(`${apiEndpointBase}/games/${gameId}/roll`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Status: ${error.status}`);
  }
}
