import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default function CourseOutlineBoard(props) {
  return (
    <Grid container columns={{ xs: 12 }}>
      <Grid xs={12} sx={{ border: 1 }}>
        <Typography sx={{ paddingTop: "2%" }} variant="h5" textAlign={"center"}>
          課程大綱
        </Typography>
      </Grid>
      <Grid xs={12} sx={{ border: 1, minHeight: 400 }}>
        <Typography
          sx={{ paddingTop: "2%" }}
          variant="body2"
          textAlign={"center"}
        >
          {props.courseOutline}
        </Typography>
        {/*if teacher consider use other */}
        {/* <TextField
          placeholder="Course Outline"
          multiline
          rows={2}
          maxRows={12}
          fullWidth
          //   sx={{ height: 400 }}
          size="medium"
        /> */}
      </Grid>
    </Grid>
  );
}
