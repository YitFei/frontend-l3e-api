import axios from "axios";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

export async function GetAPI(url, printConsole = false) {
  const token = sessionStorage.getItem("token");

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

export async function PostAPI(url, data, printConsole = false) {
  const token = sessionStorage.getItem("token");

  let this_reponse;
  await axios
    .post(url, data, { headers: { Authorization: `Bearer ${token}` } })

    .then((response) => {
      if (printConsole) {
        console.log("success");
        console.log(response);
      }
      this_reponse = response;
      // return response;
    })
    .catch((error) => {
      console.log("exception");
      console.log(error);
    });
  return this_reponse;
}

export async function PutAPI(url, data, printConsole = false) {
  const token = sessionStorage.getItem("token");

  return await axios
    .put(url, { data: data }, { headers: { Authorization: `Bearer ${token}` } })

    .then((response) => {
      if (printConsole) {
        console.log("success");
        console.log(response);
      }
      return response;
    })
    .catch((error) => {
      console.log("exception");
      console.log(error);
    });
}
