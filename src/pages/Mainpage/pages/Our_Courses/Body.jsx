import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import a1 from "./assets/a001.jpg";
import a2 from "./assets/a002.jpg";
import a3 from "./assets/a003.jpg";
const ImageList = [a1, a2, a3];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Body() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <Slider autoplay={500}>
              {ImageList.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: `url('${item}') no-repeat center center`
                  }}
                ></div>
              ))}
            </Slider>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <h2>初中组</h2>
            <br />
            英文
            <br />
            ​马来文​
            <br />
            数学
            <br />
            ​科学
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <h2>​高三冲刺班</h2>
            <br />
            英文​
            <br />
            马来文​
            <br />
            高数
            <br />
            ​物理
            <br />
            ​生物​
            <br />
            化学​
            <br />
            历史
            <br />
            地理
            <br />
            经济​
            <br />
            簿记
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <h2>高中组</h2>
            <br />
            英文
            <br />
            马来文
            <br />
            SEJARAH
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
