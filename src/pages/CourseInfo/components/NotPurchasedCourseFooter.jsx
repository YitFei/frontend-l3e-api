import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default function NotPurchasedCourseFooter(props) {
  return (
    <Grid container columns={{ xs: 12 }}>
      <Grid item xs={6} sx={{ border: 1, marginBottom: "2.5%" }}>
        <Button fullWidth>購買課程 （{props.fee}/月)</Button>
      </Grid>
    </Grid>
  );
}
