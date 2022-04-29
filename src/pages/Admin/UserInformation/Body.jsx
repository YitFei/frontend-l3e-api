import Box from "@mui/material/Box";
import SearchBar from "../../Subscriptions/components/Searchboard/Searchbar";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import UsersTable from "./components/UserTable";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: theme.palette.text.secondary,
}));

export default function Body() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        <Grid item xs={16}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "15px",
              width: "100%",
              border: "13px solid #5465f7",
              color: "158, 110, 255",
              borderRadius:10,
            }}
          >
            {" "}
            用戶資料{" "}
          </h1>
        </Grid>
        <Grid item xs={4} sm={12} md={16}>
          <Item>
            <SearchBar />
          </Item>
        </Grid>
        <Grid item xs={4} sm={12} md={16}>
          <Item>
            <UsersTable />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
