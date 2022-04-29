import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
// react.school/material-ui
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { red, green, pink } from "@mui/material/colors";

export default function Navbar(props) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {props.pages.map((item, index) => (
          <MenuItem disableRipple bool="true" key={index}>
            <NavLink
              key={index}
              to={item.link}
              style={(isActive) => ({
                color: "inherit",
                fontSize: "0.2em"
              })}
            >
              {item.name}
            </NavLink>
          </MenuItem>
        ))}
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <MenuItem
          disableRipple
          dense={true}
          selected={true}
          disableGutters={false}
          divider={true}
        >
          <a
            href="https://www.facebook.com/L3Education/"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton>
              <FacebookIcon color="primary" />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/l3.education/"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton>
              <InstagramIcon sx={{ color: pink[500] }} />
            </IconButton>
          </a>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            <IconButton>
              <TwitterIcon color="primary" />
            </IconButton>
          </a>
          <a
            href="https://www.youtube.com/channel/UCOR6nC3byiV3m6wpvTKpclA"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton>
              <YouTubeIcon sx={{ color: red[500] }} />
            </IconButton>
          </a>
          <a href="https://wa.link/b2tzw6" rel="noreferrer" target="_blank">
            <IconButton>
              <WhatsAppIcon sx={{ color: green[500] }} />
            </IconButton>
          </a>
        </MenuItem>
      </Stack>
    </>
  );
}
// things to do next Add social media link buuttons to navbar at align-left
