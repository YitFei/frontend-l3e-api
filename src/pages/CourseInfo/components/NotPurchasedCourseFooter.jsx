import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { PostAPI } from "../../../globalFunctions/APIHelper";

const URL_EnrollCourse =
  "https://api.l3education.com.my/courseSubscription/enrol";

export default function NotPurchasedCourseFooter(props) {
  const [openQuestionDialog, setOpenQuestionDialog] = React.useState(false);

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  const handleEnrollCourseBtnClick = () => {
    var data = [
      {
        courseId: props.id,
        promotionCode: "",
      },
    ];
    console.log(props.id);
    PostAPI(URL_EnrollCourse, data, false).then((res) => {
      if (res.status === 200) {
        setOpenQuestionDialog(false);
        props.setOpenDialog(false);
        props.setShowAlert(true);
      }
    });
  };
  const handleCloseQuestionDialog = () => {
    setOpenQuestionDialog(false);
  };

  return (
    <div>
      <Dialog open={openQuestionDialog} onClose={handleCloseQuestionDialog}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseQuestionDialog}
        >
          确认
        </BootstrapDialogTitle>

        <DialogContent>是否购买此课程？</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseQuestionDialog}>取消</Button>
          <Button onClick={handleEnrollCourseBtnClick}>
            <Typography sx={{ color: "red" }}>确认</Typography>
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container columns={{ xs: 12 }}>
        <Grid item xs={6} sx={{ border: 1, marginBottom: "2.5%" }}>
          <Button
            onClick={() => {
              setOpenQuestionDialog(true);
            }}
            fullWidth
          >
            購買課程 （{props.fee}/月)
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
