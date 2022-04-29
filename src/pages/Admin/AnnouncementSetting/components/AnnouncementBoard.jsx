import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RichTextEditor from "./RichTextEditor";
import Typography from "@mui/material/Typography";

export default function AnnouncementBoard() {
  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
      <Grid item xs={12} sx={{ marginLeft: "5%" }}>
        <Grid item xs={12} sx={{ border: 2, height: 50, width: 1 }}>
          <Typography align="center">通知</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ border: 1, borderColor: "black", minHeight: "400px" }}
        >
          <RichTextEditor />
        </Grid>

        <Grid item xs={12} sx={{ border: 1.5 }} container justify="center">
          <Button sx={{ width: 1 }}>點擊上傳通知</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
