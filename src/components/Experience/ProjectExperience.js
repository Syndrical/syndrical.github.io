import React from 'react';
import * as experience from './ExperienceUtil';

export default function ProjectExperience() {
  return (
    <div>
      {experience.projectExperience.map((job) =>
        experience.DisplayExperience(job),
      )}
    </div>
  );
}
