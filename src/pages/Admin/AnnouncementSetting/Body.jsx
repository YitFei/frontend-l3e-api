import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AnnouncementBoard from "./components/AnnouncementBoard";
import AnnouncementHistoryBoard from "./components/AnnouncementHistoryBoard";

export default function AnnouncementSetting() {
  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
      <Grid item xs={12}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "15px",
            width: "100%",
            border: "13px solid #5465f7",
            borderRadius: 10,
            color: "158, 110, 255",
          }}
        >
          {" "}
          設置通知管理{" "}
        </h1>
      </Grid>
      <Grid item xs={8} sx={{ boxShadow: 0 }}>
        <AnnouncementBoard />
      </Grid>
      <Grid item xs={4} sx={{ boxShadow: 0 }}>
        <AnnouncementHistoryBoard />
      </Grid>
    </Grid>
  );
}
