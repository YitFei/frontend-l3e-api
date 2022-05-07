import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha, makeStyles } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import React from "react";
import { PropaneSharp } from "@mui/icons-material";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  // const classes = useStyles();
  const setQuery = (e) => {
    props.setQuery(e);
  };
  return (
    <Search>
      <Grid container columns={{ xs: 12 }}>
        <Grid item xs={0.5}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Grid>
        <Grid item xs={11.5}>
          <TextField
            fullWidth
            height="50px"
            placeholder={"Search ..."}
            variant="standard"
            onChange={(event) => setQuery(event.target.value)}
          />
        </Grid>
      </Grid>
    </Search>
  );
}
