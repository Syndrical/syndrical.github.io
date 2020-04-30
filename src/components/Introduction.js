import React from 'react';
import { CardMedia, Typography, Divider } from '@material-ui/core';

const useStyles = () => ({
  card: {
    paddingTop: 250,
    paddingBottom: 250,
  },

  cardWrapper: {
    position: 'relative',
  },

  layer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'block',
  },
});

export default function Introduction() {
  const classes = useStyles();

  return (
    <div style={classes.cardWrapper}>
      <CardMedia
        title="Winnipeg"
        image="winnipeg.jpg"
        style={classes.card}
      >
        <Typography
          align="center"
          gutterBottom
          variant="h2"
          color="primary"
        >
          Kevin Hoang
        </Typography>
        <Divider light="true" />
        <Typography
          align="center"
          gutterBottom
          variant="h4"
          color="primary"
        >
          Kevin Hoang
        </Typography>
      </CardMedia>
      <div style={classes.layer} />
    </div>
  );
}
