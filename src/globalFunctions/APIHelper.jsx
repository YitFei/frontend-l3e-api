import axios from "axios";

export async function GetAPI(url, printConsole = false) {
  const token = localStorage.getItem("token");

  return await axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })

    .then((response) => {
      if (printConsole) {
        console.log(response);
      }
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function PostAPI(url, data, printConsole = false) {
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(data);
  axios
    .post(
      url,
      { data: data },
      { headers: { Authorization: `Bearer ${token}` } }
    )

    .then((response) => {
      if (printConsole) {
        console.log("success");
        console.log(response);
      }
    })
    .catch((error) => {
      console.log("exception");
      console.log(error);
    });
}
