const baseUrl = "https://api.dsvkurs.miun.se";
const version = "v1";

const apiEndpointBase = `${baseUrl}/${version}`;
const token = localStorage.getItem("token");

// roomService
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

export async function getRooms() {
  try {
    const response = await fetch(`${apiEndpointBase}/games/active`, {
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

export async function createRoom(name, maxPlayers) {
  try {
    const response = await fetch(`${apiEndpointBase}/rooms`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: `${name}`,
        maxPlayers: maxPlayers,
      }),
    });

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Status: ${error.status}`);
  }
}

export async function leaveRoom(gameId) {
  try {
    debugger;
    const response = await fetch(`${apiEndpointBase}/games/${gameId}/leave`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Status: ${error.status}`);
  }
}

// gameService
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
        "Content-type": "application/json",
      },
      body: JSON.stringify(move),
    });

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Status: ${error.status}`);
  }
}

//userService
export async function getUser() {
  try {
    const response = await fetch(`${apiEndpointBase}/auth/me`, {
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
