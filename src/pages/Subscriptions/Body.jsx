import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Searchboard from "./components/Searchboard/Searchboard";
import Coursescard from "./components/Coursescard";
import { GetAPI } from "../../globalFunctions/APIHelper";
import moment from "moment";
import Time from "react-time-format";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: theme.palette.text.secondary,
}));
const allcourses = [
  {
    title: "高一 电机（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },

  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
  {
    title: "高二 化学（中）",
    link: "#",
    image: "https://i.pravatar.cc/300",
    time: "none",
  },
];
const redirectToLink = "../CourseInfo";

export default function Body() {
  let URL_GetAllCourseList = "https://api.l3education.com.my/course/list";
  const [courseList, setCourseList] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const [successAlert, setSuccessAlert] = React.useState(true);

  React.useEffect(() => {
    GetAPI(URL_GetAllCourseList, false).then((res) => {
      setCourseList(res.data);
    });
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (showAlert) {
        setShowAlert(false);
      }
    }, 1500);
  }, [showAlert]);
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 1 }}>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
          severity="success" //{successAlert ? "success" : "error"}
        >
          <AlertTitle>{successAlert ? "Success" : "Error"}</AlertTitle>
          <strong>{`购买${successAlert ? "成功" : "失败"}`}</strong>
        </Alert>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        <Grid item xs={4} sm={12} md={16}>
          <Item>
            <Searchboard setQuery={setQuery} />
          </Item>
        </Grid>

        {courseList
          .filter((data) => {
            if (query === "") {
              //if query is empty
              // console.log(data);
              return data;
            } else if (
              data.courseName.toLowerCase().includes(query.toLowerCase())
            ) {
              //returns filtered array
              return data;
            }
          })
          .map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Coursescard
                  courseInfo={item}
                  title={item.courseName}
                  courseDescription={""}
                  link={null}
                  image={null}
                  time={
                    item.startTime.slice(0, 5) +
                    " - " +
                    item.endTime.slice(0, 5)
                  }
                  setShowAlert={setShowAlert}
                  // redirectTo={redirectToLink}
                />
              </Item>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
