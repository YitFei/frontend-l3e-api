import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function BasicInfo(props) {
  const [namevalue, setNameValue] = React.useState(props.name);
  const [biovalue, setBioValue] = React.useState(props.bio);

  const handleChangeName = (event) => {
    setNameValue(event.target.value);
  };
  const handleChangeBio = (event) => {
    setBioValue(event.target.value);
  };

  return (
    <div>
      <Stack
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <Item elevation={0}>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            maxRows={4}
            value={namevalue}
            onChange={handleChangeName}
          />
        </Item>
        <Item elevation={0}>
          <TextField
            id="outlined-multiline-flexible"
            label="Bio"
            multiline
            maxRows={4}
            value={biovalue}
            onChange={handleChangeBio}
          />
        </Item>
        <Item elevation={0}>
          <Button variant="outlined">Update</Button>
        </Item>
      </Stack>
    </div>
  );
}
