import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Profileboard from "./components/Profileboard/Profileboard";
import ExtendedInfo from "./components/ExtendedInfo/ExtendedInfo";
const Image = "https://i.pravatar.cc/300";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: theme.palette.text.secondary
}));

export default function Body(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Item>
            <Profileboard
              image={Image}
              name="趙曉文"
              bio="夢裡出現的人，醒來就應該去見他，生活就是怎麼簡單。"
            />
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Item>
            <ExtendedInfo
              phone="0123456789"
              class="EE3"
              parentname="Chock"
              school="MIT.Edu"
              birthday="2004/09/08"
              parentphone="0123456788"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
