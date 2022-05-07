import Box from "@mui/material/Box";
import SearchBar from "../../Subscriptions/components/Searchboard/Searchbar";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ClassroomListView from "./components/ClassroomListView";
import { useState, useEffect } from "react";
import axios from "axios";
import { ConsoleLogger } from "@aws-amplify/core";
import { set } from "draft-js/lib/EditorState";
import { GetAPI } from "../../../globalFunctions/APIHelper";
import { useAuthenticator } from "@aws-amplify/ui-react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: theme.palette.text.secondary,
}));
const rows = [createData(1, "初二 (概念科）"), createData(2, "OOP")];

function createData(id, classroom) {
  return {
    id,
    classroom,
  };
}

export default function Body(props) {
  const [data, setData] = useState([]);
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  let url_getCourseList = "https://api.l3education.com.my/course/admin/list";

  useEffect(() => {
    GetAPI(url_getCourseList).then((response) => {
      setData(response.data);
    });
  }, []);

  const getData = async () => {
    const token = sessionStorage.getItem("token");

    await axios({
      method: "get",
      url: url_getCourseList,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(function (res) {
      console.log(res.data);
      setData(res.data.data);
    });
  };

  return (
    <Box sx={{ flexGrow: 1, marginLeft: 1 }}>
      {/* {console.log(user)} */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        <Grid item xs={4} sm={12} md={16}>
          <Item>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "15px",
                border: "13px solid #5465f7",
                color: "158, 110, 255",
                borderRadius: 10,
              }}
            >
              {" "}
              开设教室{" "}
            </h1>
          </Item>
        </Grid>
        <Grid item xs={4} sm={12} md={16}>
          <Item>
            <ClassroomListView list={data} setList={setData} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
