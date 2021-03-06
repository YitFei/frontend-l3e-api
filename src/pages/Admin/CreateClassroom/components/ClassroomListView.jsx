import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import EditBoxIcon from "@mui/icons-material/EditOutlined";
import ClassroomEdit from "../../EditClassroom/Body";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditClassroom from "../../EditClassroom/Body";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { PostAPI, PutAPI } from "../../../../globalFunctions/APIHelper";
import axios from "axios";
import ManageClassroom from "../../EditClassroom/components/ManageClassroom";
import DeleteDialog from "./DeleteDialog";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: theme.palette.text.secondary,
  marginBottom: 5,
  marginRight: 6,
  boxShadow: 7,
}));

export default function ClassroomBrowse(props) {
  const token = sessionStorage.getItem("token");
  let URL_PostCourse = "https://api.l3education.com.my/course/create";
  let URL_PutCourse = "https://api.l3education.com.my/course/update/";
  const { list, setList } = props;

  const [open, setOpen] = React.useState(false);
  const [openStudentList, setOpenStudentList] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState();
  const [confirm, setConfirm] = React.useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [deleteSelected, setDeleteSelected] = React.useState();

  React.useEffect(() => {
    if (confirm) {
      let courseID = deleteSelected.id;
      var updateData = {
        courseActive: "N",
        courseCost: deleteSelected.courseCost,
        courseName: deleteSelected.courseName,
        dayOfWeek: deleteSelected.dayOfWeek,
        description: deleteSelected.description,
        endDate: deleteSelected.endDate,
        startDate: deleteSelected.startDate,
        teacherId: deleteSelected.teacherId,
      };

      PutAPI(URL_PutCourse + courseID, updateData, false).then((response) => {
        const deleted = list.map((filter) => {
          if (filter.id === courseID) {
            filter.courseActive = "N";
          }
          return filter;
        });
        // console.log(deleted);
        setList(deleted.filter((filter) => filter.courseActive !== "N"));
      });
      setConfirm(false);
    }
  }, [confirm]);

  const handleClickOpen = (courseID) => {
    const selected = list.find((course) => {
      return course.id === courseID;
    });

    setSelectedData(selected);
    setOpen(true);
  };

  const handleClose = (courseID) => {
    const selected = list.find((course) => {
      return course.id === courseID;
    });

    setOpen(false);
  };
  const handleOpenStudentList = () => {
    setOpenStudentList(true);
  };

  const handleSubmit = () => {
    // console.log(selectedData);

    PostAPI(URL_PostCourse, selectedData, true).then((response) => {
      if (response.status === 200) {
        setList([...list, selectedData]);
      }
    });

    setOpen(false);
  };

  const handleDelete = (courseID) => {
    const selected = list.find((course) => {
      return course.id === courseID;
    });
    setDeleteSelected(selected);
    setOpenDeleteDialog(true);
  };

  var defaultData = {
    courseActive: "Y",
    courseCost: 300,
    courseName: "Nothing 1234",
    dayOfWeek: 4,
    description: "L3 Education",
    endDate: "2022-05-31",
    id: "string",
    startDate: "2022-05-01",
    teacherId: "234232333",
    timetableCreateVM: {
      courseDate: "2022-05-01",
      courseId: "string",
      endTime: "12:00",
      startTime: "14:00",
    },
    zoomUrl: "www.google.com",
    googleClassroom: "www.youtube.com",
  };

  const handleAdd = () => {
    setSelectedData(defaultData);
    setOpen(true);
  };

  const CourseList = ({ list }) => (
    <List>
      {list
        .filter((filter) => filter.courseActive === "Y")
        .map((item) => (
          <ListItem
            key={item.id}
            sx={{
              border: 1,
              borderRadius: 15,
              marginBottom: "1%",
              borderColor: "blue",
            }}
          >
            {" "}
            <Typography style={{ flex: 1 }}>{item.courseName}</Typography>
            <Button onClick={() => handleClickOpen(item.id)}>
              <EditBoxIcon />
              ????????????
            </Button>
            <Button style={{}} onClick={handleOpenStudentList}>
              <AccountCircleIcon />
              ????????????
            </Button>
            <Button style={{}} onClick={() => handleDelete(item.id)}>
              <DeleteForeverIcon />
              ??????
            </Button>
          </ListItem>
        ))}
    </List>
  );

  return (
    <div>
      <Item sx={{ boxShadow: 7 }}>
        <div style={{ display: "flex" }}>
          <Button style={{ marginRight: "auto" }} onClick={handleAdd}>
            {" "}
            <AddIcon />
            ????????????
          </Button>
        </div>
      </Item>
      <div>
        <CourseList list={list} />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: "90%", border: 1, height: "80%" } }}
        fullScreen={true}
      >
        <DialogTitle>??????/??????????????????</DialogTitle>

        <DialogContent>
          <EditClassroom
            data={selectedData}
            setSelectedData={setSelectedData}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>??????</Button>
          <Button onClick={handleSubmit}>??????</Button>
        </DialogActions>
      </Dialog>

      <ManageClassroom
        open={openStudentList}
        setOpenStudentList={setOpenStudentList}
      />
      <DeleteDialog
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        setConfirm={setConfirm}
      />
    </div>
  );
}
