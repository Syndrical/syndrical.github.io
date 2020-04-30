import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: 1100,
    padding: 20,
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

export const workExperience = [
  {
    title: 'Teaching Assistant',
    place: 'University of Manitoba - Computer Science Department',
    location: 'Winnipeg, MB',
    duration: 'September 2019 - CURRENT',
    text: `Marked and provided feedback for labs to Introductory to Computer Science classes. Explained concepts to groups of students and helped facilitate communication and peer programming.`,
    note: '',
    image: 'classroom.jpg',
  },
  {
    title: 'Software Developer',
    place: 'Varian Medical Systems',
    location: 'Winnipeg, MB',
    duration: 'May 2019 - August 2019',
    text: `Worked in teams of 7 to create a minimal marketable product cloud native application to replace an existing, outdated application using Angular. Explored with Micronaut, a testing framework, and provided tests to a simple HTTP request program, providing an example to the company on how to use Micronaut to promote effective and reliable code release practices.`,
    note: 'Co-op Work Term 3',
    image: 'varian.jpg',
  },
  {
    title: 'Application Developer',
    place: 'Wawanesa Insurance',
    location: 'Winnipeg, MB',
    duration: 'September 2018 - December 2018',
    text: `Detected, investigated, and resolved bugs in discrete parts of the applications to further understand the structure of the code and seeing how the front-end and back-end is all connected. Constructed effective test cases using Karma and Jasmine to ensure the quality and the usability of the program achieved business standards. Designing and creating additions to the UI with JavaScript, and AngularJS that encapsulates services used across development teams for future use.`,
    note: 'Co-op Work Term 2',
    image: 'wawanesa.jpg',
  },
  {
    title: 'Programmer / Analyst',
    place: 'Agriculture and Agri-Food Canada',
    location: 'Winnipeg, MB',
    duration: 'January 2018 - August 2018',
    text: `Enhanced the usability and maintainability of various applications within the department to promote consistency of code structure and reusability. Composed and suggested various UI concepts and design changes to magnify user satisfaction and experience within the applications using Javascript, HTML, CSS, and JQuery. Reviewed code and assessed the impact of submitted changes to ensure reliability of the application.`,
    note: 'Co-op Work Term 1',
    image: 'agricultureagrifoods.jpg',
  },
  {
    title: 'Undergraduate Researcher',
    place: 'University of Manitoba - HCI Labs',
    location: 'Winnipeg, MB',
    duration: 'May 2017 - August 2017',
    text: `Created a sorting task environment in a virtual reality setting, using Unity, to test if different input mechanisms impacted both a user’s performance and immersion. Designed, coded, and tested the environment and interfaces in C# while conducting the study.`,
    note: '',
    image: 'uofm.jpg',
  },
];

export const projectExperience = [
  {
    title: 'Personal Website',
    place: 'Personal Project',
    location: 'Winnipeg, MB',
    duration: 'April 2019 - CURRENT',
    text: `A website dedicated to myself to both test my abilities in website development and design. Written in HTML, CSS, and JavaScript. Link here.`,
    note: '',
    image: 'website.jpg',
  },
  {
    title: 'NotifyVR',
    place: 'Group Project',
    location: 'Winnipeg, MB',
    duration: 'March 2019',
    text: `A class project to conduct pilot studies on an effective way to view notifications, using Unity, from a phone with an HTC Vive. Created for COMP 4020 - Human-Computer Interaction 2. Written in C#. Link here.`,
    note: 'Class Project',
    image: 'NotifyVR.jpg',
  },
  {
    title: 'Shape Interpreter',
    place: 'Group Project',
    location: 'Winnipeg, MB',
    duration: 'March 2019',
    text: `A simplified application that renders a 3D modal of the shape that the user draws in Virtual Reality. Created for COMP 4020 - Human-Computer Interaction 2. Written in C#. Link here.`,
    note: 'Class Project',
    image: 'ShapeInterpreter.jpg',
  },
  {
    title: 'Throw-GameVR',
    place: 'Personal Project',
    location: 'Winnipeg, MB',
    duration: 'December 2017',
    text: `A carnival game to test out video game and virtual reality development in Unity. Throw balls to the moving target to keep yourself in the game! Written in C#. Link here.`,
    note: '',
    image: 'ThrowGame-Demo.gif',
  },
  {
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
    title: 'Webmaster',
    place:
      'University of Manitoba - Biomedical Engineering Design Team',
    location: 'Winnipeg, MB',
    duration: 'April 2019 - CURRENT',
    text: `Worked with other members and executives of University of Manitoba's Biomedical Engineering Design Team to create and manage the team's website using Wordpress. Link here.`,
    note: '',
    image: 'IMG_9399_EDIT.jpg',
  },
  {
    title: 'Aesthetics Team',
    place: 'University of Manitoba - Concrete Canoe',
    location: 'Winnipeg, MB',
    duration: 'September 2019 - CURRENT',
    text: `Worked with other members on the Aesthetics Team of University of Manitoba's Concrete Canoe to provide the logo, the color scheme of the team, as well as the design of the canoe itself.`,
    note: '',
    image: 'UMCCC_Logo.png',
  },
  {
    title: 'Hype Crew',
    place: 'Ignite Cycle & Strength',
    location: 'Winnipeg, MB',
    duration: 'January 2020 - CURRENT',
    text: `Worked with other members of Hype Crew to help set up, clean, and manage the studio, and interacted with riders during shifts to help pump them up and get engaged before and after cycling / strength classes.`,
    note: '',
    image: 'ignite.jpg',
  },
  {
    title: 'Hype Crew',
    place: 'WPG Cycle',
    location: 'Winnipeg, MB',
    duration: 'October 2019 - CURRENT',
    text: `Worked with other members of Hype Crew to help set up, clean, and manage the studio, and interacted with riders during shifts to help pump them up and get engaged before and after cycling.`,
    note: '',
    image: 'wpgcycle.jpg',
  },
  {
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
    <Container className={classes.container}>
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
              <Typography gutterBottom variant="h5">
                <Box fontWeight="fontWeightBold">{job.title}</Box>
              </Typography>
              <Typography variant="subtitle1">
                <Box>{job.place}</Box>
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                <Box fontStyle="oblique">{job.duration}</Box>
              </Typography>
              <Typography variant="caption" color="textSecondary">
                <Box>{job.text}</Box>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="overline">
                {job.location}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="button">{job.note}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
