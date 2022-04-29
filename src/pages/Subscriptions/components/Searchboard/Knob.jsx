import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Knob(props) {
  const [value, setValue] = React.useState("outlined");
  const handleClick = () => {
    if (value === "filled") {
      setValue("outlined");
    } else {
      setValue("filled");
    }
  };

  return <Chip label={props.name} variant={value} onClick={handleClick} />;
}
