import React from "react";

import Typography from "@material-ui/core/Typography";

import Section from "./Section";

function About() {
  return (
    <Section title="About">
      <Typography variant="body1" gutterBottom>
        I’m an engineer with a background in software. I love to build and
        experiment, and I am inspired by the diverse perspectives and
        backgrounds of the people around me.
      </Typography>
      <Typography variant="body1">
        I'm looking for a position in a strong-visioned company where I can
        bring my passions, work with smart people and learn new skills.
      </Typography>
    </Section>
  );
}

export default About;
