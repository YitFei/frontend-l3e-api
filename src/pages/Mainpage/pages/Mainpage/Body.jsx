import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import VideoFrame from "./components/VideoFrame";
import AboutUs from "./components/AboutUs";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Body() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={1}>
        <Item elevation={0}>
          <VideoFrame />
        </Item>
        <Item elevation={0}>
          <AboutUs />
        </Item>
      </Stack>
    </Box>
  );
}
