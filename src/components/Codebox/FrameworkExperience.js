import React from 'react';
import List from '@material-ui/core/List';
import * as experience from './CodeboxUtil';

export default function FrameworkExperience() {
  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {experience.frameworkExperience.map((framework) =>
        experience.DisplayExperience(framework),
      )}
    </List>
  );
}
