import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { makeStyles } from "@material-ui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CourseSelectionlisting from "./CourseSelectionListing";

const ariaLabel = { "aria-label": "description" };
const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

const useStyles = makeStyles((theme) => ({
  input: {
    "&::placeholder": {
      color: "red",
      textAlign: "center",
    },
  },
}));

export default function PromotionSettingBoard(props) {
  const [value, setValue] = React.useState("0.0");
  const [openDialog, setOpenDialog] = React.useState(false);
  const depositedAmount = "";
  const [selectedCourse, setSelectedCourse] = React.useState([]);
  const [confirm, setConfirm] = React.useState(false);

  const handleAmount = (evt) => {
    if (rx_live.test(evt.target.value)) setValue(evt.target.value);
  };

  const handleClickCourse = () => {
    setConfirm(false);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleConfirm = () => {
    setConfirm(true);
    setOpenDialog(false);
  };

  let selectedItemList;
  if (confirm) {
    selectedItemList = selectedCourse.map((course) => {
      return <ListItem>{course.name}</ListItem>;
    });
  }

  const classes = useStyles();
  return (
    <div>
      <Grid container columns={{ xs: 12 }}>
        <Grid item xs={10}>
          <Grid container columns={{ xs: 12 }}>
            <Grid
              item
              xs={12}
              sx={{ borderTop: 1, borderLeft: 1, borderBottom: 1, width: 1 }}
            >
              <Typography align="center"> 優惠</Typography>
            </Grid>
            <Grid item xs={3} sx={{ border: 1 }}>
              {" "}
              <Typography align="center"> 設置優惠碼</Typography>
            </Grid>
            <Grid item xs={9} sx={{ border: 1 }}>
              {" "}
              <Typography align="center"> 設置優惠期限</Typography>
            </Grid>

            <Grid item xs={3} sx={{ border: 1 }}>
              <TextField
                placeholder="點擊輸入優惠碼"
                sx={{ border: 0, margin: "auto" }}
                fullWidth
                InputProps={{ classes: { input: classes.input } }}
              />
            </Grid>
            <Grid item xs={3.5} sx={{ border: 1 }}>
              <TextField fullWidth type="date"></TextField>
            </Grid>
            <Grid item xs={2} sx={{ border: 1 }}>
              <Typography align="center"> 截止至</Typography>
            </Grid>
            <Grid item xs={3.5} sx={{ border: 1 }}>
              <TextField fullWidth type="date"></TextField>
            </Grid>

            <Grid item xs={12} sx={{ border: 1, width: 1 }}>
              <Typography align="center"> 優惠額度</Typography>
            </Grid>

            <Grid item xs={4} sx={{ border: 1, width: 1 }}>
              <Typography align="center" sx={{ marginTop: "3%" }}>
                {" "}
                RM
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ border: 1, width: 1 }}>
              <TextField
                placeholder="點擊輸入優惠金額"
                sx={{ border: 0, margin: "auto" }}
                fullWidth
                InputProps={{ classes: { input: classes.input } }}
                // type="number"
                value={value}
                onChange={handleAmount}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ borderLeft: 1, borderTop: 1, border: 0, height: "40%" }}
        >
          <Grid item xs={12} sx={{ border: 1, height: "12%" }}>
            <Button fullWidth sx={{ height: 43 }} onClick={handleClickCourse}>
              选择课程
            </Button>
          </Grid>

          <Paper style={{ maxHeight: 240, overflow: "auto", minHeight: 240 }}>
            <List>{selectedItemList}</List>
          </Paper>
        </Grid>

        <Grid item xs={12} sx={{ borderTop: 1, borderBottom: 1, width: 1 }}>
          <Button fullWidth>確認</Button>
        </Grid>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        PaperProps={{ sx: { width: "30%", border: 1, height: "40%" } }}
      >
        <DialogTitle>选择课程</DialogTitle>

        <DialogContent sx={{ border: 0 }}>
          <CourseSelectionlisting
            allCourses={props.allCourses}
            setSelectedCourse={setSelectedCourse}
            selectedCourse={selectedCourse}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleConfirm}>確認</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
