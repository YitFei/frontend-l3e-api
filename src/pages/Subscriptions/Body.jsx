import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Searchboard from "./components/Searchboard/Searchboard";
import Coursescard from "./components/Coursescard";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: theme.palette.text.secondary,
}));
const allcourses = [
  {
    title: "高一 电机（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },

  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
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
        <Grid item xs={4} sm={12} md={16}>
          <Item>
            <Searchboard />
          </Item>
        </Grid>
        {allcourses.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Coursescard
                title={item.title}
                link={item.link}
                image={item.image}
                time={item.time}
                redirectTo={redirectToLink}
              />
            </Item>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Item>g</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
