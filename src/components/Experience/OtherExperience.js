import React from 'react';
import * as experience from './ExperienceUtil';

export default function OtherExperience() {
  return (
    <div>
      {experience.otherExperience.map((job) =>
        experience.DisplayExperience(job),
      )}
    </div>
  );
}
