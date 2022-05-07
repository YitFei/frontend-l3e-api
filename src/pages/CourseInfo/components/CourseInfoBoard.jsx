import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function CourseInfoBoard(props) {
  return (
    <Grid container columns={{ xs: 12 }}>
      <Grid
        item
        xs={12}
        sx={{
          border: 1,
          borderColor: "red",
          boxShadow: 7,
          borderRadius: 2,
          marginBottom: "2%",
        }}
      >
        <Typography sx={{ paddingTop: "2%" }} variant="h5" textAlign={"center"}>
          {props.title}
        </Typography>
        <Typography variant="body2" textAlign={"center"}>
          {props.dayOfWeek}
        </Typography>
        <Typography color="text.secondary" textAlign={"center"}>
          {props.time}
        </Typography>
      </Grid>

      <Grid item xs={4} sx={{ border: 1, height: 200 }}>
        <CardMedia component="img" height="100%" image={props.image} />
      </Grid>
      <Grid item xs={4} sx={{ border: 1 }}>
        <Grid item xs={12} sx={{ borderBottom: 1, height: "30%" }}>
          <Typography textAlign={"center"}>教師：{props.teacher}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
          >
            {props.description}
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={4} sx={{ border: 1 }}>
        <Grid item xs={12} sx={{ borderBottom: 1, height: "30%" }}>
          <Typography textAlign={"center"}>課程詳情</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            border: 1,
            borderColor: props.userGroup === "student" ? "black" : "blue",
            height: "70%",
          }}
        >
          {" "}
          {props.userGroup === "student" ? (
            <Typography variant={"body2"}>{props.courseDesc}</Typography>
          ) : (
            <TextareaAutosize
              f
              maxRows={2}
              aria-label="maximum height"
              placeholder="Anonymous Message"
              defaultValue={props.courseDesc}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
