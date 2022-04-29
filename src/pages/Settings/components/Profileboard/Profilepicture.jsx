import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
export default function Profilepicture(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: "auto",
          width: "45%",
          height: "auto",
          borderRadius: 2
        }
      }}
    >
      <Paper elevation={3}>
        <Avatar
          sx={{ height: "100%", width: "100%", borderRadius: 2 }}
          variant="square"
          alt="Travis Howard"
          src={props.image}
        />
      </Paper>
    </Box>
  );
}

// click to edit function not done
