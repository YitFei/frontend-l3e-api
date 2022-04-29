import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Searchbar from "./Searchbar";
import Knob from "./Knob";
import Stack from "@mui/material/Stack";
const searchtype = ["初中", "高中", "熱門課程", "好口碑"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Searchboard() {
  return (
    <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
      <Grid container spacing={1}>
        <Grid item xs={4} sm={12} md={16}>
          <Item elevation={0}>Buy Courses</Item>
        </Grid>
        <Grid item xs={4} sm={12} md={16}>
          <Item elevation={0}>
            <Searchbar />
          </Item>
        </Grid>
        <Grid item xs={4} sm={12} md={16} m={1}>
          <Item elevation={0}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {searchtype.map((item, index) => (
                <div key={index}>
                  <Knob name={item} />
                </div>
              ))}
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
