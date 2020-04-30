import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Typography,
  Box,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: 1200,
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
}));

export default function Education() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <Typography align="center" gutterBottom variant="h4">
          <Box>Post-Secondary Education</Box>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography align="center" variant="h5">
                  <Box fontWeight="fontWeightBold">
                    University of Manitoba
                  </Box>
                </Typography>
                <Typography
                  gutterBottom
                  align="center"
                  variant="subtitle2"
                >
                  <Box fontStyle="oblique">
                    September 2015 - April 2020
                  </Box>
                </Typography>
                <Typography align="center" variant="subtitle2">
                  <Box>
                    B. Sc. Bachelor of Computer Science, Honours
                    (Co-op) / Minor in Psychology
                  </Box>
                </Typography>
                <Typography align="center" variant="subtitle1">
                  <Box fontFamily="Monospace">GPA: 3.83 / 4.5</Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </div>
  );
}
