import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffb74d",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const preventDefault = (event) => event.preventDefault();

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid container columns={16}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <NavLink
                    to="/"
                    style={(isActive) => ({
                      color: "inherit",
                    })}
                  >
                    <img
                      id="logo"
                      src={props.logo}
                      width="auto"
                      height="30px"
                      alt="logo"
                    ></img>
                  </NavLink>
                  <span>&nbsp;&nbsp;</span>
                  <Typography align="left" variant="h6">
                    {props.logoTitle}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Stack
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={0}
                >
                  {props.somProp.map((item, index) => (
                    <>
                      <Item>
                        <NavLink
                          to={item.link}
                          style={(isActive) => ({
                            color: "inherit",
                            textDecoration: "none",
                          })}
                        >
                          {item.name}
                        </NavLink>
                      </Item>
                    </>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
