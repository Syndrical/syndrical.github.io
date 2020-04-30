import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Link,
  IconButton,
  Typography,
  Box,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: 1000,
    padding: 50,
  },
  image: {
    width: 400,
  },
  img: {
    border: '1px solid grey',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 20,
    objectFit: 'cover',
  },
  icon: {
    width: 60,
    height: 60,
  },
}));

export default function Education() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <Typography align="center" variant="h4">
          <Box>Contact Me</Box>
        </Typography>
        <Typography align="center" gutterBottom variant="caption">
          <Box>Wanna connect? See more information? Contact me. </Box>
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

          <IconButton href="http://hci.cs.umanitoba.ca/people/bio/kevin-hoang">
            <LibraryBooksIcon fontSize="large" />
          </IconButton>

          <IconButton href="https://www.instagram.com/kevinhoang__/">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </div>
  );
}
