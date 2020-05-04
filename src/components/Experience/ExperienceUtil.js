import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import ForwardIcon from '@material-ui/icons/Forward';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: 1100,
    padding: 20,
  },
  image: {
    maxWidth: 400,
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

export const workExperience = [
  {
    id: '1',
    title: 'Teaching Assistant',
    place: 'University of Manitoba - Computer Science Department',
    location: 'Winnipeg, MB',
    duration: 'September 2019 - CURRENT',
    text: `Marked and provided feedback for labs to Introductory to Computer Science classes. Explained concepts to groups of students and helped facilitate communication / peer programming.`,
    note: '',
    image: 'classroom.jpg',
  },
  {
    id: '2',
    title: 'Software Developer',
    place: 'Varian Medical Systems',
    location: 'Winnipeg, MB',
    duration: 'May 2019 - August 2019',
    text: `Worked in teams of 7 to create a minimal marketable product cloud native application to replace an existing, outdated application. Explored Micronaut and providing an example to the company on how to use Micronaut, by making tests to a simple HTTP request program, to promote effective and reliable code release practices. Collaborated with project managers and designers for improved user experience. Used TypeScript and Angular`,
    note: 'Co-op Work Term 3',
    image: 'varian.jpg',
  },
  {
    id: '3',
    title: 'Virtual / Augmented Reality Technology Assistant',
    place: 'University of Manitoba – Rady Faculty of Health Sciences',
    location: 'Winnipeg, MB',
    duration: 'July 2018 - April 2019',
    text: `Taught the use of various virtual reality equipment to students and therapists. Worked with students and therapists on using virtual reality equipment on patients to provide effective, analytic data and efficient treatment plans.`,
    image: 'virtualreality.jpg',
  },
  {
    id: '4',
    title: 'Application Developer',
    place: 'Wawanesa Insurance',
    location: 'Winnipeg, MB',
    duration: 'September 2018 - December 2018',
    text: `Detected, investigated, and resolved bugs in discrete parts of different applications throughout the company. Constructed effective test cases using Karma and Jasmine to ensure the quality and usability of the application to achieved business standards. Created endpoints to utilize HTTP Requests to add in notifications about system maintenance / outtages to applications.  Collaborated with UX Designer to design and create UI additions with JavaScript, and AngularJS.`,
    note: 'Co-op Work Term 2',
    image: 'wawanesa.jpg',
  },
  {
    id: '5',
    title: 'Programmer / Analyst',
    place: 'Agriculture and Agri-Food Canada',
    location: 'Winnipeg, MB',
    duration: 'January 2018 - August 2018',
    text: `Enhanced the usability and maintainability of various applications within the department through refactoring to promote consistency of code structure and reusability. Composed and suggested various UI concepts and design changes to magnify user satisfaction and experience within the applications using Javascript, HTML, CSS, and JQuery. Reviewed code and assessed the impact of submitted changes to ensure reliability of the application.`,
    note: 'Co-op Work Term 1',
    image: 'agricultureagrifoods.jpg',
  },
  {
    id: '6',
    title: 'Undergraduate Researcher',
    place: 'University of Manitoba - HCI Labs',
    location: 'Winnipeg, MB',
    duration: 'May 2017 - August 2017',
    text: `Created a sorting task environment in a virtual reality setting, using Unity, to test if different input mechanisms impacted both a user’s performance and immersion. Designed, coded, and tested the environment and interfaces in C# while conducting the study.`,
    note: '',
    image: 'uofm.jpg',
    link: 'http://hci.cs.umanitoba.ca/people/bio/kevin-hoang',
  },
];

export const projectExperience = [
  {
    id: '1',
    title: 'Personal Website',
    place: 'Personal Project',
    location: 'Winnipeg, MB',
    duration: 'April 2019 - CURRENT',
    text: `A website dedicated to myself to both test my abilities in website development and design. Used React and Material-UI, along with HTML, CSS, and JavaScript.`,
    note: '',
    image: 'website.jpg',
    link: 'https://syndrical.github.io/',
  },
  {
    id: '2',
    title: 'NotifyVR',
    place: 'Group Project',
    location: 'Winnipeg, MB',
    duration: 'March 2019',
    text: `A class project to conduct pilot studies on an effective way to view notifications, using Unity, from a phone with an HTC Vive. Created for COMP 4020 - Human-Computer Interaction 2. Written in C#.`,
    note: 'Class Project',
    image: 'NotifyVR.jpg',
    link: 'https://github.com/tizzir/VRNotifications',
  },
  {
    id: '3',
    title: 'Shape Interpreter',
    place: 'Group Project',
    location: 'Winnipeg, MB',
    duration: 'February 2019',
    text: `A simplified application that renders a 3D modal of the shape that the user draws in Virtual Reality. Created for COMP 4020 - Human-Computer Interaction 2. Written in C#.`,
    note: 'Class Project',
    image: 'ShapeInterpreter.jpg',
    link: 'https://github.com/Syndrical/ShapeInterpreter',
  },
  {
    id: '4',
    title: 'Throw-GameVR',
    place: 'Personal Project',
    location: 'Winnipeg, MB',
    duration: 'December 2017',
    text: `A carnival game to test out video game and virtual reality development in Unity. Throw balls to the moving target to keep yourself in the game! Written in C#.`,
    note: '',
    image: 'ThrowGame-Demo.gif',
    link: 'https://github.com/Syndrical/ThrowGame-VR',
  },
  {
    id: '5',
    title: 'Cow-Tris Adventures',
    place: 'Group Project',
    location: 'Winnipeg, MB',
    duration: 'December 2014',
    text: `Collaborated with a team of 5 high-school students to develop a Tetris-like game involving cows. Used C#, C++, and Adobe Photoshop.`,
    note: '',
    image: 'cowtris.jpg',
  },
];

export const otherExperience = [
  {
    id: '1',
    title: 'Webmaster',
    place:
      'University of Manitoba - Biomedical Engineering Design Team',
    location: 'Winnipeg, MB',
    duration: 'April 2019 - CURRENT',
    text: `Worked with other members and executives of University of Manitoba's Biomedical Engineering Design Team to create and manage the team's website using Wordpress.`,
    note: '',
    image: 'IMG_9399_EDIT.jpg',
    link: 'https://uofmbmed.com/',
  },
  {
    id: '2',
    title: 'Hype Crew',
    place: 'Ignite Cycle & Strength',
    location: 'Winnipeg, MB',
    duration: 'January 2020 - CURRENT',
    text: `Worked with other members of Hype Crew to help set up, clean, and manage the studio, and interacted with riders during shifts to help pump them up and get engaged before and after cycling / strength classes.`,
    note: '',
    image: 'ignite.jpg',
  },
  {
    id: '3',
    title: 'Hype Crew',
    place: 'WPG Cycle',
    location: 'Winnipeg, MB',
    duration: 'October 2019 - CURRENT',
    text: `Worked with other members of Hype Crew to help set up, clean, and manage the studio, and interacted with riders during shifts to help pump them up and get engaged before and after cycling.`,
    note: '',
    image: 'wpgcycle.jpg',
  },
  {
    id: '4',
    title: 'Aesthetics Team',
    place: 'University of Manitoba - Concrete Canoe',
    location: 'Winnipeg, MB',
    duration: 'September 2019 - CURRENT',
    text: `Worked with other members on the Aesthetics Team of University of Manitoba's Concrete Canoe to provide the logo, the color scheme of the team, as well as the design of the canoe itself.`,
    note: '',
    image: 'UMCCC_Logo.png',
  },
  {
    id: '5',
    title: 'Frontline Leader',
    place: 'University of Manitoba',
    location: 'Winnipeg, MB',
    duration: 'September 2016 - April 2020',
    text: `Worked with other volunteers as a Frontline Leader to assist with programs on campus such as Orientation. Prepared, managed and presented activities to small and big groups of people.`,
    note: '',
    image: 'uofm2.jpg',
  },
];

export const DisplayExperience = (job) => {
  const classes = useStyles();

  return (
    <Container key={job.id} className={classes.container}>
      <Grid container spacing={2}>
        <Grid item>
          <Container className={classes.image}>
            <img
              className={classes.img}
              alt="complex"
              src={job.image}
            />
          </Container>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                color="textPrimary"
              >
                <Box fontWeight="fontWeightBold">{job.title}</Box>
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                <Box>{job.place}</Box>
              </Typography>
              <Typography
                variant="subtitle2"
                color="textPrimary"
                gutterBottom
              >
                <Box fontStyle="oblique">{job.duration}</Box>
              </Typography>
              <Typography variant="caption" color="textSecondary">
                <Box>{job.text}</Box>
              </Typography>
            </Grid>
            {job.link && (
              <Grid item>
                <Typography variant="caption">
                  <Button
                    size="small"
                    variant="outlined"
                    href={job.link}
                    endIcon={<ForwardIcon />}
                  >
                    Click here for more
                  </Button>
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Typography variant="overline" color="textPrimary">
                <Box>{job.location}</Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="button" color="textPrimary">
              {job.note}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
