import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function PurchasedCourseFooter(props) {
  return (
    <Grid container columns={{ xs: 12 }}>
      <Grid item xs={4} sx={{ border: 1 }}>
        <Button fullWidth>開始上課{props.time}</Button>
      </Grid>

      <Grid item xs={1} sx={{ borderTop: 1, borderLeft: 1, borderBottom: 1 }}>
        <Typography
          textAlign={"center"}
          sx={{ marginLeft: "40%", marginTop: "10%" }}
        >
          {props.mark}
        </Typography>
      </Grid>
      <Grid item xs={1} sx={{ borderTop: 1, borderRight: 1, borderBottom: 1 }}>
        <ThumbUpIcon
          sx={{ fontSize: 50, marginLeft: "40%", marginTop: "5%" }}
        />
      </Grid>
      <Grid item xs={1} />

      <Grid item xs={6} sx={{ border: 1, marginTop: "2.5%" }}>
        <Button fullWidth>作業筆記專區</Button>
      </Grid>

      <Grid item xs={12} sx={{ border: 0, marginTop: "2.5%" }}>
        <Grid item xs={3} sx={{ border: 1 }}>
          <Typography textAlign={"center"}>匿名留言</Typography>
        </Grid>
        <Grid item xs={12} sx={{ border: 0, height: 200 }}>
          <TextareaAutosize
            maxRows={6}
            aria-label="maximum height"
            placeholder="Anonymous Message"
            defaultValue=""
            style={{ width: "100%", height: "200px" }}
          />
        </Grid>

        <Grid item xs={12} sx={{ border: 1, marginBottom: "2.5%" }}>
          <Button fullWidth>提交（此留言只有管理員可見）</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
