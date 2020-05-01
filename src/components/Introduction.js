import React from 'react';
import { CardMedia, Typography, Divider } from '@material-ui/core';

const useStyles = () => ({
  card: {
    paddingTop: 250,
    paddingBottom: 250,
    color: 'white',
  },
});

export default function Introduction() {
  const classes = useStyles();

  return (
    <div>
      <CardMedia
        title="Winnipeg"
        image="winnipegdark.jpg"
        style={classes.card}
      >
        <Typography align="center" gutterBottom variant="h2">
          Kevin Hoang
          <Divider light />
        </Typography>

        <Typography align="center" gutterBottom variant="h4">
          Kevin Hoang
        </Typography>
      </CardMedia>
    </div>
  );
}
