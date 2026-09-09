export async function getRoom(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(`https://api.dsvkurs.miun.se/v1/rooms/${id}`, {
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

// export async function getRoom(id) {
//   try {
//     const response = await fetch(`https://api.dsvkurs.miun.se/v1/rooms/${id}`, {
//       method: "GET",
//       headers: {
//         Authorization: "",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Status: ${response.status}`);
//     }
//   } catch (error) {}

//   return await response.json();
// }
