import React from "react";

import Typography from "@material-ui/core/Typography";

import Section from "./Section";

function About() {
  return (
    <Section title="About">
      <Typography variant="body1" gutterBottom>
        I’m a software engineer. I’m a software engineer. I’m a software
        engineer. I’m a software engineer. I’m a software engineer. I’m a
        software engineer. I’m a software engineer. I’m a software engineer.
      </Typography>
      <Typography variant="body1">
        I want to work for a cool company. I want to work for a cool company. I
        want to work for a cool company.
      </Typography>
    </Section>
  );
}

export default About;
