import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

export default function CourseSelectionListing(props) {
  const [checked, setChecked] = React.useState(props.selectedCourse);

  const handleToggle = (course) => () => {
    const currentIndex = checked.indexOf(course);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(course);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.setSelectedCourse(newChecked);
  };

  function checkExist(selectedCourse) {
    let bCheckExist = false;
    props.selectedCourse.forEach((course) => {
      if (course.id === selectedCourse.id) {
        bCheckExist = true;
      }
    });
    return bCheckExist;
  }

  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {props.allCourses.map((course) => {
        const labelId = `checkbox-list-secondary-label-${course.id}`;
        return (
          <ListItem
            key={course.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(course)}
                inputProps={{ "aria-labelledby": labelId }}
                checked={checkExist(course)}
              />
            }
            disablePadding
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${course.id + 1}`}
                  src={`/static/images/avatar/${course.id + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={course.name} />
            </ListItem>
          </ListItem>
        );
      })}
    </List>
  );
}
