import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import a1 from "./assets/a001.jpg";
import a2 from "./assets/a002.jpg";
import a3 from "./assets/a003.jpg";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1.2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Itemlisting = [
  {
    img: a1,
    title: "宗旨",
    description: "专为13~18岁的中学生提供优良的线上教育平台。"
  },
  {
    img: a2,
    title: "愿景",
    description:
      "创造全新线上教育模式，让学生们能更好的在老师的教导下更好的学习。\n提供学生们优良的网络平台。\n让线上教学模式发扬光大。\n让学生们备战统考(UEC)&SPM。"
  },
  {
    img: a3,
    title: "核心价值",
    description: "安心学习\n品质\n创新\n实践\n效率\n终生学习"
  }
];

export default function Body() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <Item elevation={0}>
            <h1>关于我们</h1>
          </Item>
        </Grid>
        <Grid container xs={12}>
          {Itemlisting.map((item, index) => (
            <>
              <Grid item xs={1}></Grid>
              <Grid item xs={6}>
                <Item elevation={0}>
                  <div
                    style={{
                      background: `url('${item.img}') no-repeat center center `,
                      backgroundSize: "cover",
                      opacity: "0.9",
                      height: "19em"
                    }}
                  ></div>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item elevation={0}>
                  <div style={{ height: "19em" }}>
                    <h3>{item.title}</h3>
                    {item.description.split("\n").map((line) => (
                      <p>{line}</p>
                    ))}
                  </div>
                </Item>
              </Grid>
              <Grid item xs={1}></Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
