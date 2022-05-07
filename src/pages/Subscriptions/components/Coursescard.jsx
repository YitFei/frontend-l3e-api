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
import { Link } from "react-router-dom";
import CourseInfo from "../../CourseInfo/Body";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const redirectToLink = "../CourseInfo";

export default function Coursescard(props) {
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <div>
      <CourseInfo
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        Purchased={false}
        courseInfo={props.courseInfo}
        setShowAlert={props.setShowAlert}
      ></CourseInfo>
      <Card sx={{ maxWidth: 345 }}>
        {/* <Link to={props.redirectTo} state={{ Purchased: false }}> */}
        <CardMedia
          component="img"
          height="140"
          // image={props.image}
          image={null}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
            {props.courseDescription}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            时间: {props.time}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack sx={{ m: "auto" }} direction="column" spacing={3}>
            <Item elevation={0}>Not subscribe Yet</Item>
            <Item>
              <Button
                size="small"
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                go to classroom{props.link}
              </Button>
            </Item>
          </Stack>
        </CardActions>
      </Card>
      {/* </Link> */}
    </div>
  );
}
