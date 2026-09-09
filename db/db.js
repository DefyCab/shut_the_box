const baseUrl = "https://api.dsvkurs.miun.se";
const version = "v1";

const apiEndpointBase = `${baseUrl}/${version}`;
const token = localStorage.getItem("token");

export async function getRoomById(id) {
  const response = await fetch(`${apiEndpointBase}/rooms/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Status: ${response.status}`);
  }

  const result = response.json();

  return result;
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
    const result = response.json();

    return result;
  } catch (error) {
    throw new Error(`Status: ${error.status}`);
  }
}

// export async function getRoom(id) {
//   try {
//     const response = await fetch(`https://api.dsvkurs.miun.se/v1/rooms/${id}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Status: ${response.status}`);
//     }
//   } catch (error) {
//     throw new Error(`Status: ${error.}`);
//   }

//   return await response.json();
// }
