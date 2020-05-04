import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Container,
  IconButton,
  Typography,
  Box,
  Avatar,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: 1000,
    padding: 50,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function Education() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      style={
        theme.palette.type === 'light'
          ? { backgroundColor: '#ffffff' }
          : { backgroundColor: '#212121' }
      }
    >
      <Container className={classes.container}>
        <Box justifyContent="center" display="flex">
          <Avatar
            className={classes.avatar}
            alt="Kevin Hoang"
            src="me.jpg"
          />
        </Box>
        <Typography align="center" color="textPrimary" variant="h4">
          <Box>Contact Me</Box>
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          gutterBottom
          variant="caption"
        >
          <Box>Wanna connect? See more information? Let's talk. </Box>
        </Typography>
        <Box justifyContent="center" display="flex">
          <IconButton href="mailto:kevinhoang9797@gmail.com">
            <MailIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/kevin-hoang-cs-uofm/">
            <LinkedInIcon fontSize="large" />
          </IconButton>

          <IconButton href="https://github.com/Syndrical">
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton href="https://www.instagram.com/kevinhoang__/">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </div>
  );
}
