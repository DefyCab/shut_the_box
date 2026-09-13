const baseUrl = "https://api.dsvkurs.miun.se";
const version = "v1";

const apiEndpointBase = `${baseUrl}/${version}`;
const token = localStorage.getItem("token");

export async function getRoom(id) {
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

export async function getCurrentState(gameId) {
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

export async function rollDice(gameId) {
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

export async function submitMove(gameId, move) {
  try {
    const response = await fetch(`${apiEndpointBase}/games/${gameId}/move`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        selectedNumbers: [`${move}`],
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
