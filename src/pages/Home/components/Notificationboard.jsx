import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import { GetAPI } from "../../../globalFunctions/APIHelper";

export default function Notificationboard() {
  const [anouncementList, setAnouncementList] = React.useState([]);

  let URL_GetAnouncementList =
    "https://api.l3education.com.my/announcement/getAll";
  React.useEffect(() => {
    GetAPI(URL_GetAnouncementList).then((data) => {
      const activeAnouncementList = data.data.filter(
        (anouncement) => anouncement.isOver === "N"
      );
      setAnouncementList(activeAnouncementList);
    });
  }, []);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
        borderRadius: 12,
      }}
      subheader={<li />}
    >
      {anouncementList.map((anouncement) => (
        <div>
          <ListSubheader>{`${anouncement.title}`}</ListSubheader>
          <ListItem key={anouncement.title + anouncement.description}>
            <ListItemText>{anouncement.description}</ListItemText>
          </ListItem>
        </div>
      ))}
    </List>
  );
}
