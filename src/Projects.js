import React from "react";

import Section from "./Section";
import Item from "./Item";

function Projects() {
  return (
    <Section title="Projects">
      <Item
        title="128T Dropped Packets"
        when={{ to: "Jul '19" }}
        content={`
A tool in 128T for debugging routing decisions that cause packets to be dropped
        `}
        short
      />
      <Item
        title="LED Desk Sign"
        when={{ to: "Aug '18" }}
        content={`
A 9x5 RGB sign that shows animations for the weather, notifications for lunch and more
        `}
        short
      />
      <Item
        title="Poverty Stoplight App"
        when={{ to: "May '18" }}
        content={`
An Android application for PS social workers to help families in poverty
        `}
        short
      />
      <Item
        title="RECFISH"
        when={{ to: "May '18" }}
        content={`
A CFI protection instrumented at compile-time using LLVM for ARM real-time systems
        `}
        short
      />
    </Section>
  );
}

export default Projects;
