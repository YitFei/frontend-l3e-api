import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GetAPI } from "../../../globalFunctions/APIHelper";
function createData(mon, tue, wed, thu, fri, sat, sun) {
  return { mon, tue, wed, thu, fri, sat, sun };
}

const rows = [
  createData(
    "班會",
    "",
    "",
    "高二 化学（中）",
    "1",
    "初二 数学 （概念课）",
    ""
  ),
  createData(
    "班會",
    "1",
    "",
    "高二 化学（中）",
    "",
    "初二 数学 （概念课）",
    "1"
  ),
  createData("班會", "", "", "高二 化学（中）", "", "初二 数学 （概念课）", ""),
  createData(
    "班會",
    "1",
    "",
    "高二 化学（中）",
    "1",
    "初二 数学 （概念课）",
    ""
  ),
  createData("班會", "", "", "高二 化学（中）", "", "初二 数学 （概念课）", ""),
];

export default function Timetable() {
  let URL_GetAllSubcriptionCourse =
    "https://api.l3education.com.my/courseSubscription/list";

  let URL_GetAllCourseInfo = "https://api.l3education.com.my/course/list";

  const [courseList, setCourseList] = React.useState([]);
  const [courseInfoList, setCourseInfoList] = React.useState([]);

  React.useEffect(() => {
    GetAPI(URL_GetAllSubcriptionCourse).then((res) => {
      setCourseList(res.data);
    });
    GetAPI(URL_GetAllCourseInfo).then((res) => {
      setCourseInfoList(res.data);
    });
  }, []);

  return (
    <div>
      {console.log("---------------------------------------")}
      {console.log(
        courseInfoList
          .filter((itemA) => {
            return !courseInfoList.find((itemB) => {
              return itemA.courseId === itemB.id;
            });
          })
          .sort((a, b) => {
            let startTime =
              Date.parse(`01/01/2020 ${a.startTime}`) -
              Date.parse(`01/01/2020 ${b.startTime}`);
            return startTime;
          })
          .sort(
            (a, b) =>
              Date.parse(`01/01/2020 ${a.endTime}`) -
              Date.parse(`01/01/2020 ${b.endTime}`)
          )
          .map((courseInfo) => courseInfo)
      )}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">一</TableCell>
              <TableCell align="center">二</TableCell>
              <TableCell align="center">三</TableCell>
              <TableCell align="center">四</TableCell>
              <TableCell align="center">五</TableCell>
              <TableCell align="center">六</TableCell>
              <TableCell align="center">日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseInfoList
              .filter((itemA) => {
                return !courseInfoList.find((itemB) => {
                  return itemA.courseId === itemB.id;
                });
              })
              .sort((a, b) => {
                let startTime =
                  Date.parse(`01/01/2020 ${a.startTime}`) -
                  Date.parse(`01/01/2020 ${b.startTime}`);
                return startTime;
              })
              .sort(
                (a, b) =>
                  Date.parse(`01/01/2020 ${a.endTime}`) -
                  Date.parse(`01/01/2020 ${b.endTime}`)
              )
              .map((courseInfo, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((dayOfWeek) => (
                    <TableCell width={100} align="center">
                      {/* {courseInfo.startTime} */}
                      {dayOfWeek === courseInfo.dayOfWeek ? (
                        <span>
                          {courseInfo.courseName}
                          <br></br> {courseInfo.startTime.slice(0, 5)} -{" "}
                          {courseInfo.endTime.slice(0, 5)}
                        </span>
                      ) : (
                        ""
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
