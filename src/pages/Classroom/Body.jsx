import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Classcard from "./components/Classcard";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const mycourses = [
  {
    title: "高二 化学（中）",
    link: "#",
    time: "1730",
  },

  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
];

const redirectToLink = "../CourseInfo";

export default function Body() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        {mycourses.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Classcard
              title={item.title}
              link={item.link}
              redirectTo={redirectToLink}
              time={item.time}
              image="https://i.pravatar.cc/300"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
