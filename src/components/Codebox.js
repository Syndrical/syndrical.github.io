import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  CardMedia,
  Grid,
  Container,
  Typography,
  Box,
  Divider,
  Paper,
} from '@material-ui/core';
import LanguageExperience from './Codebox/LanguageExperience';
import FrameworkExperience from './Codebox/FrameworkExperience';
import ToolsExperience from './Codebox/ToolsExperience';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(5),
  },
  description: {
    padding: theme.spacing(1),
  },
  paper: {
    minWidth: 250,
    padding: theme.spacing(3),
  },
  image: {
    backgroundAttachment: 'fixed',
  },
}));

export default function Codingbox() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <CardMedia
      className={classes.image}
      title="University of Manitoba - Bright Picture"
      image={
        theme.palette.type === 'light'
          ? 'lightcode.jpg'
          : 'darkcode.jpg'
      }
    >
      <Divider />
      <Container className={classes.container}>
        <Typography align="center" variant="h5" color="textPrimary">
          <Box fontWeight="fontWeightBold">The Encounter Box</Box>
        </Typography>
        <Typography
          className={classes.description}
          variant="caption"
          align="center"
          color="textPrimary"
        >
          <Box fontStyle="oblique">
            These are the different kinds of programming-related
            topics that I've experienced. Experience mileage may vary.
          </Box>
        </Typography>
        <Grid container justify="space-evenly" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              {' '}
              <Typography gutterBottom variant="h6" align="center">
                <Box>Languages</Box>
              </Typography>
              <LanguageExperience />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              {' '}
              <Typography gutterBottom variant="h6" align="center">
                <Box>Frameworks</Box>
              </Typography>
              <FrameworkExperience />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              {' '}
              <Typography gutterBottom variant="h6" align="center">
                <Box>Tools</Box>
              </Typography>
              <ToolsExperience />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </CardMedia>
  );
}
