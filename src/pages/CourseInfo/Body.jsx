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

export default function CourseBoard(props) {
  const location = useLocation();
  const { Purchased } = location.state;
  console.log({ Purchased });

  var Footer;
  Footer = Purchased ? (
    (Footer = (
      <PurchasedCourseFooter time={CourseData.time} mark={CourseData.mark} />
    ))
  ) : (
    <NotPurchasedCourseFooter fee={CourseData.fee} />
  );

  return (
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
          title={CourseData.title}
          dayOfWeek={CourseData.dayOfWeek}
          time={CourseData.time}
          image={CourseData.image}
          teacher={CourseData.teacher}
          description={CourseData.description}
          courseDesc={CourseData.courseDesc}
        />
      </Grid>
      <Grid item xs={4} sx={{ marginTop: "5%", marginRight: "2.5%" }}>
        <CourseOutlineBoard courseOutline={CourseData.courseOutline} />
      </Grid>
      <Grid item xs={10} sx={{ marginTop: "-2.5%", marginLeft: "2.5%" }}>
        {Footer}
      </Grid>
    </Grid>
  );
}
