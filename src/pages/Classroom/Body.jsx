import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Classcard from "./components/Classcard";
import { useNavigate } from "react-router-dom";
import CourseInfo from "../CourseInfo/Body";
import { GetAPI } from "../../globalFunctions/APIHelper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const mycourses = [
  {
    title: "高二 化学（中）",
    link: "#",
    time: "1730",
  },

  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    time: "none",
  },
];

const redirectToLink = "../CourseInfo";

export default function Body(props) {
  let URL_GetAllSubcriptionCourse =
    "https://api.l3education.com.my/courseSubscription/list";

  let URL_GetAllCourseInfo = "https://api.l3education.com.my/course/list";

  const [courseList, setCourseList] = React.useState([]);
  const [courseInfoList, setCourseInfoList] = React.useState([]);
  const userGroup = sessionStorage.getItem("userGroup");

  React.useEffect(() => {
    GetAPI(URL_GetAllSubcriptionCourse, false).then((res) => {
      setCourseList(res.data);
    });
    GetAPI(URL_GetAllCourseInfo).then((res) => {
      setCourseInfoList(res.data);
    });
  }, []);
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        {userGroup === "student"
          ? courseList.map((course, index) =>
              courseInfoList
                .filter((filter) => {
                  return filter.id === course.courseId;
                })
                .map((courseInfo) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Classcard
                      title={course.courseName}
                      time={
                        courseInfo.startTime.slice(0, 5) +
                        " - " +
                        courseInfo.endTime.slice(0, 5)
                      }
                      courseInfo={courseInfo}
                      image={null}
                    />
                  </Grid>
                ))
            )
          : courseInfoList
              .filter((name) => name.teacherName === props.userDetail.name)
              .map((courseInfo, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Classcard
                    title={courseInfo.courseName}
                    time={
                      courseInfo.startTime.slice(0, 5) +
                      " - " +
                      courseInfo.endTime.slice(0, 5)
                    }
                    courseInfo={courseInfo}
                    image={null}
                  />
                </Grid>
              ))}
      </Grid>
    </Box>
  );
}
