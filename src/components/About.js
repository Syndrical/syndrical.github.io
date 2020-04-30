import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Typography,
  ButtonBase,
  Box,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(10),
    maxWidth: 1200,
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 300,
    objectFit: 'cover',
    marginRight: 100,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="DSC_0064.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid alignItems="center" justify="center" item xs>
                <Typography align="center" gutterBottom variant="h3">
                  <Box>About Me</Box>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Box>
                    Hey! I am a Computer Scientist. I am constantly
                    thinking about my design and structure in my work
                    to provide people with an enjoyable feel and
                    experience while actively strengthening my
                    capabilities in Computer Science. Officially, my
                    job is to assist on projects that companies are
                    working on, provide feedback and insight on ideas
                    with the projects, and collaborate with other
                    people to provide a finished product. This is a
                    fancy way of saying I sit in front of a computer 8
                    hours of week, mashing buttons until things work.
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider></Divider>
    </div>
  );
}
