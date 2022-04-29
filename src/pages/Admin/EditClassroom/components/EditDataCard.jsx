import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DayOfWeekPicker from "./DayOfWeekPicker";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import { SliderValueLabelUnstyled } from "@mui/base";

export default function EditDataCard({
  item,
  data,
  teacherList,
  setSelectedData,
}) {
  const [enable, setEnable] = React.useState(false);
  const [value, setValue] = React.useState(data[item.fieldName]);
  const [ez, setEz] = React.useState({ id: 1, name: "abc" });

  // console.log(ez);
  // if(true)
  // {
  //   setEz
  // }
  let optionTeacherList;
  if (item.fieldName === "teacherId") {
    optionTeacherList = teacherList.map((teacher) => {
      return {
        name: teacher.name,
        id: teacher.id,
        description: teacher.description,
      };
    });
  }

  var uiControl;
  var uiTextField;
  var bottomTextField;
  let disableColor = "#c4c1c0";
  let enableColor = { red: 0, green: 0, blue: 0 };

  // to search field name is field name list contain multiple fields
  function getFieldName(fieldName) {
    return item.fieldName.find((name) => {
      return name === fieldName;
    });
  }

  //get the data by fieldname
  function valueData(fieldName) {
    if (!Array.isArray(item.fieldName)) {
      if (item.fieldName === "teacherId") {
        return optionTeacherList.find((teacher) => {
          return teacher.id === data[fieldName];
        });
      }
      return value;
    } else {
      return data[getFieldName(fieldName)];
    }
  }

  let IsSelectionTextField = item.inputType === "select";
  const handleChange = (event, fieldName) => {
    // if (item.fieldName === "teacherId") {
    //   console.log(event.target.value);
    // }

    if (item.isCourseExpired) {
      // console.log(data["startDate"]);
      // console.log(value);
    }

    setSelectedData((p) => ({ ...p, [fieldName]: event.target.value }));
    setValue(event.target.value);
    // console.log(value);
  };

  const handleOnEditClick = () => {
    setEnable(true);
  };

  if (item.inputType === "time" && item.fieldName.includes("dayOfWeek")) {
    uiControl = <DayOfWeekPicker defaultValue={valueData("dayOfWeek")} />;
  } else {
    uiControl = null;
  }

  if (IsSelectionTextField) {
    uiTextField = (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={optionTeacherList}
        getOptionLabel={(option) => option.name}
        // value={teacherList.find((v) => v.name[0])}
        // value={value}
        onChange={(e) => handleChange(e, item.fieldName)}
        renderOption={(props, option) => (
          <li {...props}>
            <Box
              sx={{
                flexGrow: 1,
                borderBottom: 1,
              }}
            >
              <Typography variant="subtitle1">{option.name}</Typography>

              <Typography variant="body2" color="text.secondary">
                {option.description}
              </Typography>
            </Box>
          </li>
        )}
        sx={{
          marginLeft: "5%",
          marginRight: "5%",
          width: "90%",
          backgroundColor: enable ? enableColor : disableColor,
        }}
        renderInput={(params) => <TextField {...params} disabled={!enable} />}
      />
    );
  } else {
    uiTextField =
      (item.inputType !== "time" && item.inputType !== "date") ||
      item.fieldName === "classCancel" ? (
        <TextField
          sx={{
            marginLeft: "5%",
            marginRight: "5%",
            width: "90%",
            backgroundColor: enable ? enableColor : disableColor,
          }}
          id={item.inputType}
          type={item.inputType}
          select={IsSelectionTextField}
          value={valueData()}
          onChange={(e) => handleChange(e, item.fieldName)}
          disabled={!enable}
        ></TextField>
      ) : (
        <Grid container xs={12}>
          <Grid item xs={5}>
            <TextField
              sx={{
                backgroundColor: enable ? enableColor : disableColor,
              }}
              fullWidth
              id={item.inputType}
              type={item.inputType}
              select={IsSelectionTextField}
              value={
                // item.isCourseExpired
                //   ? valueData("startDate")
                //   : valueData("startTime")
                value
              }
              onChange={(e) =>
                handleChange(e, item.isCourseExpired ? "startDate" : "endDate")
              }
              disabled={!enable}
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <Typography align="center">至</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              sx={{
                backgroundColor: enable ? enableColor : disableColor,
              }}
              fullWidth
              id={item.inputType}
              type={item.inputType}
              select={IsSelectionTextField}
              value={
                item.isCourseExpired
                  ? valueData("endDate")
                  : valueData("endTime")
              }
              onChange={(e) =>
                handleChange(e, item.isCourseExpired ? "endDate" : "endTime")
              }
              disabled={!enable}
            ></TextField>
          </Grid>
        </Grid>
      );
  }

  return (
    <Grid key={item.fieldName} fullWidth fullHeight sx={{ boxShadow: 5 }}>
      <Card sx={{ minWidth: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <Grid sx={{ border: 0 }}>{uiControl}</Grid>

            <Grid sx={{ marginTop: "5%" }}>
              <Typography align="center">{item.displayName}</Typography>
            </Grid>
            <Grid sx={{ marginTop: "5%" }}>{uiTextField}</Grid>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ p: 1, m: 1, mx: "auto" }}
            size="small"
            onClick={handleOnEditClick}
          >
            点击修改{item.displayName}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
