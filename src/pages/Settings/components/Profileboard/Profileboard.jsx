import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Profilepicture from "./Profilepicture";
import BasicInfo from "./BasicInfo";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Profileboard(props) {
  return (
    <Box sx={{ flexGrow: 1 }} p={3}>
      <Grid columns={17} container spacing={0}>
        <Grid xs={17} m={1}>
          Profile Settings
        </Grid>
        <Grid item xs={17} sm={10} md={8}>
          <Item elevation={0}>
            <Profilepicture image={props.image} />
          </Item>
        </Grid>
        <Grid item xs={17} sm={4} md={6}>
          <Item elevation={0}>
            <BasicInfo name={props.name} bio={props.bio} />
          </Item>
          <Grid item xs={"auto"} sm={1} md={1}>
            {/* blank spacing */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
