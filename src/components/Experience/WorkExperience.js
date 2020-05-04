import React from 'react';
import * as experience from './ExperienceUtil';

export default function WorkExperience() {
  return (
    <div>
      {experience.workExperience.map((job) =>
        experience.DisplayExperience(job),
      )}
    </div>
  );
}
