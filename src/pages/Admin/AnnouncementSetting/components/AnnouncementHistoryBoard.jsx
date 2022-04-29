import Grid from "@mui/material/Grid";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import Button from "@mui/material/Button";
import AnnouncementHistoryDialog from "./AnnouncementHistoryDialog";
import Typography from "@mui/material/Typography";

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem
      sx={{ border: 1 }}
      style={style}
      key={index}
      component="div"
      disablePadding
    >
      <ListItemText primary={`Item ${index + 1}`} />

      <AnnouncementHistoryDialog />
    </ListItem>
  );
}

export default function AnnouncementHistoryBoard() {
  const [open, setOpen] = React.useState(false);

  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
      <Grid
        item
        xs={12}
        sx={{ marginLeft: "5%", marginRight: "20%", border: 0 }}
      >
        <Grid item xs={12} sx={{ border: 2, height: 50, width: 1 }}>
          <Typography>歷史通知</Typography>
        </Grid>
        <Grid sx={{ border: 1 }}>
          <FixedSizeList
            height={400}
            width={360}
            itemSize={46}
            itemCount={200}
            overscanCount={5}
          >
            {renderRow}
          </FixedSizeList>
        </Grid>
      </Grid>
    </Grid>
  );
}
