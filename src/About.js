import React from "react";

import Typography from "@material-ui/core/Typography";

import Section from "./Section";

function About() {
  return (
    <Section title="About">
      <Typography variant="body1" gutterBottom>
        I’m a coder, I love to build and experiment.
      </Typography>
      <Typography variant="body1">
        I'm looking for a company with a vision where I can bring my passions,
        work with smart people and learn new skills.
      </Typography>
    </Section>
  );
}

export default About;
