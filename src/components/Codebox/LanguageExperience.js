import React from 'react';
import List from '@material-ui/core/List';
import * as experience from './CodeboxUtil';

export default function LanguageExperience() {
  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {experience.languageExperience.map((language) =>
        experience.DisplayExperience(language),
      )}
    </List>
  );
}
