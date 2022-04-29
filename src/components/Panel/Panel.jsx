
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    borderRadius: 12,
    color: theme.palette.text.secondary
  }));

  export default function AlignItemsList() {
      return (<div></div>);
  }