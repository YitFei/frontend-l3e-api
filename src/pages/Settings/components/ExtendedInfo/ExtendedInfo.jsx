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
  color: theme.palette.text.secondary
}));

export default function ExtendedInfo(props) {
  const [phonevalue, setPhoneValue] = React.useState(props.phone);
  const [schoolvalue, setSchoolValue] = React.useState(props.school);
  const [classvalue, setClassValue] = React.useState(props.class);
  const [birthdayvalue, setBirthdayValue] = React.useState(props.birthday);
  const [parentnamevalue, setParentNameValue] = React.useState(
    props.parentname
  );
  const [parentphonevalue, setParentPhoneValue] = React.useState(
    props.parentphone
  );
  const handleChangePhone = (event) => {
    setPhoneValue(event.target.value);
  };
  const handleChangeSchool = (event) => {
    setSchoolValue(event.target.value);
  };
  const handleChangeClass = (event) => {
    setClassValue(event.target.value);
  };
  const handleChangeBirthday = (event) => {
    setBirthdayValue(event.target.value);
  };
  const handleChangeParentName = (event) => {
    setParentNameValue(event.target.value);
  };
  const handleChangeParentPhone = (event) => {
    setParentPhoneValue(event.target.value);
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
        <Grid item xs={16} sm={5} md={4}>
          <Item elevation={0}>
            <TextField
              id="outlined-multiline-flexible"
              label="Phone"
              multiline
              maxRows={4}
              value={props.phone}
              onChange={handleChangePhone}
            />
          </Item>
        </Grid>
        <Grid item xs={16} sm={5} md={4}>
          <Item elevation={0}>
            <TextField
              id="outlined-multiline-flexible"
              label="School"
              multiline
              maxRows={4}
              value={props.school}
              onChange={handleChangeSchool}
            />
          </Item>
        </Grid>
        <Grid item xs={16} sm={5} md={4}>
          <Item elevation={0}>
            <TextField
              id="outlined-multiline-flexible"
              label="Class"
              multiline
              maxRows={4}
              value={props.class}
              onChange={handleChangeClass}
            />
          </Item>
        </Grid>
        <Grid item xs={16} sm={5} md={4}>
          <Item elevation={0}>
            <TextField
              id="outlined-multiline-flexible"
              label="Birthday"
              multiline
              maxRows={4}
              value={props.birthday}
              onChange={handleChangeBirthday}
            />
          </Item>
        </Grid>
        <Grid item xs={16} sm={5} md={4}>
          <Item elevation={0}>
            <TextField
              id="outlined-multiline-flexible"
              label="ParentName"
              multiline
              maxRows={4}
              value={props.parentname}
              onChange={handleChangeParentName}
            />
          </Item>
        </Grid>
        <Grid item xs={16} sm={5} md={4}>
          <Item elevation={0}>
            <TextField
              id="outlined-multiline-flexible"
              label="ParentPhone"
              multiline
              maxRows={4}
              value={props.parentphone}
              onChange={handleChangeParentPhone}
            />
          </Item>
        </Grid>
        <Grid
          item
          xs={18}
          sm={18}
          md={18}
          mr={5}
          container
          justifyContent="flex-end"
        >
          <Item elevation={0}>
            <Button variant="outlined">Update</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
