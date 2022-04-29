import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

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
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
      </Grid>
      <Grid item xs={4} sx={{ border: 1 }}>
        <Grid xs={12} sx={{ borderBottom: 1, height: "30%" }}>
          <Typography textAlign={"center"}>教師：{props.teacher}</Typography>
        </Grid>
        <Grid xs={12}>
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
        <Grid xs={12} sx={{ borderBottom: 1, height: "30%" }}>
          <Typography textAlign={"center"}>課程詳情{props.teacher}</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="body2" color="text.primary" textAlign={"center"}>
            {props.courseDesc}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
