import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Popover } from '@material-ui/core';

export const languageExperience = [
  {
    id: '1',
    name: 'C',
    experience:
      'Used for a single class, teaching me the importance of testing and looking through code thoroughly.',
  },
  {
    id: '2',
    name: 'C#',
    experience:
      'C# was the second language I learned, with me introduced to it along with group projects in high school. I have also used it with undergraduate research and personal projects when using Unity. ',
  },
  {
    id: '3',
    name: 'C++',
    experience:
      'C++ was the first programming language I have learned when taking Computer Science in high school. This was also used in a couple of other classes in University. C++ allowed me to help understand how C works.',
  },
  {
    id: '4',
    name: 'CSS',
    experience:
      'Used for all work terms, some group projects, and some personal projects.',
  },
  {
    id: '5',
    name: 'HTML',
    experience:
      'Used for all work terms, some group projects, and some personal projects.',
  },
  {
    id: '6',
    name: 'Java',
    experience:
      'Utilized throughout most classes in University. Java is also the language I use when explaining stuff as a Teacher Assistant.',
  },
  { id: '7', name: 'JavaScript', experience: 'Stuff' },
  {
    id: '8',
    name: 'Python',
    experience:
      'Used it for an assignment, as well as tinkered around in it in my own time.',
  },
  {
    id: '9',
    name: 'Ruby',
    experience:
      'Only used it in an assignment for a class in University.',
  },
  {
    id: '10',
    name: 'SQL',
    experience:
      'Learned it in a database class, required for a database specialization, as well as the first two work terms.',
  },
  {
    id: '11',
    name: 'TypeScript',
    experience:
      'TypeScript was the main language I have used for my third work term.',
  },
  {
    id: '12',
    name: 'XML',
    experience:
      'Used for an assignment in a university course, and for describing data in undergraduate research.',
  },
];

export const frameworkExperience = [
  {
    id: '1',
    name: 'AJAX',
    experience:
      'Used for an assignment for communication between server and client through streams and sockets.',
  },
  {
    id: '2',
    name: 'Angular',
    experience:
      'Utilized in my third work term. My experience with Angular.js in my second work term allowed me to adapt to the framework and TypeScript easily.',
  },
  {
    id: '3',
    name: 'Angular.js',
    experience:
      'Used in my second work term. This helped me learn how to utilize Angular in my third work term.',
  },
  {
    id: '4',
    name: 'Ant Design',
    experience:
      'Used for a recent group project, which gave me idea to find other UI frameworks and discovered Material-UI.',
  },
  {
    id: '5',
    name: 'Bootstrap',
    experience:
      'Bootstrap was the first framework I have ever used, with it being utilized in my first work term. ',
  },
  {
    id: '6',
    name: 'Cucumber',
    experience:
      'Utilized in conjunction with Mocha as a complete testing architecture in my second work term.',
  },
  {
    id: '7',
    name: 'Jasmine',
    experience:
      'Used in conjunction with Mocha as a complete testing architecture in my first work term.',
  },
  {
    id: '8',
    name: 'jQuery',
    experience:
      'Utilized this framework for my first work term as well as some assignments in classes.',
  },
  {
    id: '9',
    name: 'Material-UI',
    experience: 'Created this website with Material-UI.',
  },
  {
    id: '10',
    name: 'Micronaut',
    experience:
      'Testing framework used and research on for my third work term. This testing framework is now being utilized by multiple teams in Varian after I have left.',
  },
  {
    id: '11',
    name: 'Mocha',
    experience:
      'Used this testing framework at my first & second work term.',
  },
  {
    id: '12',
    name: 'React',
    experience:
      'Created this website with React. Also used React for a group project. ',
  },
];

export const toolExperience = [
  {
    id: '1',
    name: 'Android Studio',
    experience:
      'Only used for a group project in a group project class called Software Engineering I.',
  },
  {
    id: '2',
    name: 'BitBucket',
    experience:
      'Version Control tool used during work term 2. This allowed me to understand how git works visually.',
  },
  {
    id: '3',
    name: 'Confluence',
    experience:
      'Documenting tool used in work term 2 & 3. This allowed me to learn how to communicate through people with different backgrounds in programming.',
  },
  {
    id: '4',
    name: 'Cruicible',
    experience:
      'A tool used for code reviewing, utilized in work term 2. This made me understand the importance of peer programming and code reviewing.',
  },
  {
    id: '5',
    name: 'Eclipse',
    experience:
      'Only used for a single class in University, since it was recommended at the time and I was still new to different IDEs.',
  },
  {
    id: '6',
    name: 'Git',
    experience:
      'Used git for about anything group related work regarding code throughout my journey, such as my three workterms, group projects, and this website. I use command line, GitHub Desktop, and built-in git in IDEs.',
  },
  {
    id: '7',
    name: 'IntelliJ',
    experience:
      'Utilized IntelliJ for all work terms, some personal projects, and assignments for the most part. IntelliJ is my go-to IDE, with VS Code being a close second.',
  },
  {
    id: '8',
    name: 'JIRA',
    experience:
      'Used JIRA for tracking bugs within projects in some group projects and all work terms.',
  },
  {
    id: '9',
    name: 'npm',
    experience:
      'Used npm for all work terms, some group projects, and this website, specifically for installing and managing dependencies.',
  },
  {
    id: '10',
    name: 'Unity',
    experience:
      'Utilized Unity for anything virtual reality development related, such as ShapeInterpreter, Throw-GameVR, and undergraduate research.',
  },
  {
    id: '11',
    name: 'Visual Studio',
    experience:
      'Used Visual Studio throughout high school when learning C++, including Cow-Tris Adventures, as well as a couple assignments in University.',
  },
  {
    id: '12',
    name: 'Visual Studio Code',
    experience:
      'Utilized Visual Studio Code when making this website, as well as a couple of group projects and assignments. I have grown to like VS Code alot, almost over IntelliJ.',
  },
];

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
  },
  popover: {},
  typography: {
    maxWidth: 300,
    padding: theme.spacing(2),
  },
}));

export const DisplayExperience = (type) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div key={type.id}>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        className={classes.button}
        fullWidth
      >
        {type.name}
      </Button>
      <Popover
        id={id}
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          {type.experience}
        </Typography>
      </Popover>
    </div>
  );
};
