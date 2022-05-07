import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";
import CourseInfo from "../../CourseInfo/Body";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Classcard(props) {
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <div>
      <CourseInfo
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        Purchased={true}
        courseInfo={props.courseInfo}
        time={props.time}
      ></CourseInfo>
      <Card sx={{ maxWidth: 345 }}>
        {/* <Link to={props.redirectTo} state={{ Purchased: true }}> */}
        <CardMedia component="img" height="140" image={props.image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
          >
            时间: {props.time}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack sx={{ m: "auto" }} direction="column" spacing={3}>
            <Item elevation={0}>未上课</Item>
            <Item>
              <Button
                size="small"
                onClick={() => {
                  console.log("123");
                  setOpenDialog(true);
                }}
              >
                go to classroom{props.link}
              </Button>
            </Item>
          </Stack>
        </CardActions>
        {/* </Link> */}
      </Card>
    </div>
  );
}
