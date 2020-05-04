import React from 'react';
import { CardMedia, Typography } from '@material-ui/core';

const useStyles = () => ({
  root: {
    flexGrow: 1,
  },
  card: {
    paddingTop: 250,
    paddingBottom: 250,
    color: 'white',
  },
});

export default function Introduction() {
  const classes = useStyles();

  return (
    <CardMedia
      title="Winnipeg"
      image="winnipegdark.jpg"
      style={classes.card}
    >
      <Typography align="center" gutterBottom variant="h2">
        Kevin Hoang
      </Typography>

      <Typography align="center" gutterBottom variant="h5">
        Possibly another typical computer science student.
      </Typography>
    </CardMedia>
  );
}
