import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Divider,
  CardMedia,
} from '@material-ui/core';
import WorkExperience from './Experience/WorkExperience';
import ProjectExperience from './Experience/ProjectExperience';
import OtherExperience from './Experience/OtherExperience';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    backgroundAttachment: 'fixed',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="experience"
          centered
        >
          <Tab
            wrapped
            key="1"
            label="Work Experience"
            {...a11yProps(0)}
          />
          <Tab wrapped key="2" label="Projects" {...a11yProps(1)} />
          <Tab
            wrapped
            key="3"
            label="Extracurricular"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <CardMedia
        className={classes.image}
        title="Winnipeg"
        image={
          theme.palette.type === 'light'
            ? 'nature.jpg'
            : 'darkbackground.jpg'
        }
      >
        <TabPanel
          key="4"
          value={value}
          index={0}
          dir={theme.direction}
        >
          <WorkExperience />
        </TabPanel>
        <TabPanel
          key="5"
          value={value}
          index={1}
          dir={theme.direction}
        >
          <ProjectExperience />
        </TabPanel>
        <TabPanel
          key="6"
          value={value}
          index={2}
          dir={theme.direction}
        >
          <OtherExperience />
        </TabPanel>
        <Divider />
      </CardMedia>
    </div>
  );
}
