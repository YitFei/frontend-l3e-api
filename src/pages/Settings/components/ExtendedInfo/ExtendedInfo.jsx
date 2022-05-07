import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.9),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const studentInfoColumnName = [
  {
    fieldName: "hpNo",
    displayName: "phone",
  },
  {
    fieldName: "school",
    displayName: "School",
  },
  {
    fieldName: "classInSchool",
    displayName: "Class",
  },
  {
    fieldName: "dob",
    displayName: "Birthday",
  },
  {
    fieldName: "parentName",
    displayName: "Parent Name",
  },
  {
    fieldName: "parentHpNo",
    displayName: "Parent Phone No",
  },
];

const teacherInfoColumnName = [
  {
    fieldName: "dob",
    displayName: "Birthday",
  },
  {
    fieldName: "age",
    displayName: "Age",
  },
];

export default function ExtendedInfo(props) {
  const { userDetail } = props;
  let userGroup = sessionStorage.getItem("userGroup");

  let displayColumns =
    userGroup === "student" ? studentInfoColumnName : teacherInfoColumnName;

  const handleChange = (event, fieldName) => {
    props.setUserDetail((preData) => ({
      ...preData,
      [fieldName]: event.target.value,
    }));
  };
  return (
    <Box
      sx={{ flexGrow: 1 }}
      mb={1}
      pb={3}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={1} columns={16}>
        <Grid item xs={16}>
          <Item elevation={0}>
            More Info
            <br />
            基本資料維護 （不顯示主頁）
          </Item>
        </Grid>
        {displayColumns.map((column) => {
          return (
            <Grid item xs={16} sm={5} md={4}>
              <Item elevation={0}>
                <TextField
                  id="outlined-multiline-flexible"
                  label={column.displayName}
                  multiline
                  maxRows={4}
                  value={userDetail[column.fieldName]}
                  onChange={(e) => handleChange(e, column.fieldName)}
                />
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
