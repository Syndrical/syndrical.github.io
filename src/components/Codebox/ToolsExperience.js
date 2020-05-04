import React from 'react';
import List from '@material-ui/core/List';
import * as experience from './CodeboxUtil';

export default function ToolExperience() {
  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {experience.toolExperience.map((tool) =>
        experience.DisplayExperience(tool),
      )}
    </List>
  );
}
