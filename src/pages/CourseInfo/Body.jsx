import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CouseInfoBoard from "./components/CourseInfoBoard";
import CourseOutlineBoard from "./components/CourseOutlineBoard";
import PurchasedCourseFooter from "./components/PurchasedCourseFooter";
import NotPurchasedCourseFooter from "./components/NotPurchasedCourseFooter";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { GetAPI } from "../../globalFunctions/APIHelper";

const CourseData = {
  title: "高一 电机（中）",
  dayOfWeek: "星期日",
  time: "9.30am ~ 10.30am",
  image: "https://i.pravatar.cc/300",
  teacher: "Gundam",
  description: "p=np",
  courseDesc:
    "初二 数学 （概念课）六 8p.m-9.30p.m2/5 ， 2/12 ， 2/19 ， 2/26 4堂",
  courseOutline: "this is course outline...",
  mark: "199",
  fee: "RM666",
};

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

export default function CourseBoard(props) {
  const location = useLocation();
  // const { Purchased } = props; // location.state;
  const [courselinks, setCourseLinks] = React.useState([]);
  const userGroup = sessionStorage.getItem("userGroup");

  let URL_GetCourseLink = "https://api.l3education.com.my/onlineClassroom/get/";
  React.useEffect(() => {
    GetAPI(URL_GetCourseLink + props.courseInfo.id).then((res) => {
      setCourseLinks(res.data);
    });
  }, []);
  var Footer;

  if (userGroup === "student") {
    Footer = props.Purchased ? (
      (Footer = (
        <PurchasedCourseFooter
          time={props.time}
          mark={CourseData.mark}
          courseInfo={props.courseInfo}
          zoomURL={courselinks.zoomUrl}
          googleClassroom={courselinks.googleClassroom}
        />
      ))
    ) : (
      <NotPurchasedCourseFooter
        fee={props.courseInfo.courseCost}
        id={props.courseInfo.id}
        setOpenDialog={props.setOpenDialog}
        setShowAlert={props.setShowAlert}
      />
    );
  }

  const handleClose = () => {
    props.setOpenDialog(false);
  };

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

  return (
    <Dialog
      open={props.openDialog}
      onClose={handleClose}
      fullScreen
      PaperProps={{ sx: { width: "90%", border: 1, height: "80%" } }}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        课程
      </BootstrapDialogTitle>
      <DialogContent>
        {" "}
        <Grid container columns={{ xs: 10 }}>
          <Grid
            item
            xs={5}
            sx={{
              marginTop: "5%",
              marginRight: "2.5%",
              marginLeft: "2.5%",
            }}
          >
            <CouseInfoBoard
              userGroup={userGroup}
              title={props.courseInfo.courseName}
              dayOfWeek={props.courseInfo.dayOfWeek}
              time={
                props.courseInfo.startTime.slice(0, 5) +
                " - " +
                props.courseInfo.endTime.slice(0, 5)
              }
              image={null}
              teacher={props.courseInfo.teacherName}
              description={props.courseInfo.teacherDescription}
              courseDesc={props.courseInfo.courseDescription}
            />
          </Grid>
          <Grid item xs={4} sx={{ marginTop: "5%", marginRight: "2.5%" }}>
            <CourseOutlineBoard courseOutline={"此功能未开放"} />
          </Grid>
          <Grid item xs={10} sx={{ marginTop: "-2.5%", marginLeft: "2.5%" }}>
            {Footer}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        {userGroup === "teacher" && (
          <div>
            <Button onClick={handleClose}>取消</Button>
            <Button onClick={handleClose}>
              <Typography sx={{ color: "red" }}>确认</Typography>
            </Button>
          </div>
        )}
      </DialogActions>
    </Dialog>
  );
}
