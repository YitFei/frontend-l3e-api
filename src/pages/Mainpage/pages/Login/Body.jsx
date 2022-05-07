import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Body(props) {
  const [loginUser, setLoginUser] = React.useState();

  React.useEffect(() => {}, [loginUser]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Authenticator loginMechanisms={["email"]}>
            {({ signOut, user }) => (
              <main>
                {/* {console.log(user)} */}
                {props.setLogin(user.signInUserSession.accessToken.jwtToken)}
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
        </Grid>
      </Grid>
    </Box>
  );
}
