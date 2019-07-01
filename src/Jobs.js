import React from "react";

import Section from "./Section";
import Item from "./Item";

function Jobs() {
  return (
    <Section title="Jobs">
      <Item
        title="Software Engineer"
        where="128 Technology in Burlington, MA"
        when={{ from: "May '18", to: "now" }}
        content={`
This is some text about 128 Technology, and my role in the organization.
And this is a summary of my experience.

- This is one achomplishment from 128 Technology
- This is another achomplishment from 128 Technology
- This is yet another achomplishment from 128 Technology
          `}
      />
      <Item
        title="IT Lead"
        where="Come Alive Communications in West Grove, PA (Remote)"
        when={{ from: "Dec '18", to: "now" }}
        content={`
This is some text about Come Alive, and my role in the organization.
And this is a summary of my experience.

- This is one achomplishment from Come Alive
- This is another achomplishment from Come Alive
          `}
      />
      <Item
        title="IT Lead"
        where="Come Alive Communications in West Grove, PA (Remote)"
        when={{ from: "Dec '18", to: "now" }}
        content={`
This is some text about Come Alive, and my role in the organization.
And this is a summary of my experience.

- This is one achomplishment from Come Alive
- This is another achomplishment from Come Alive
          `}
      />
      <Item
        title="IT Lead"
        where="Come Alive Communications in West Grove, PA (Remote)"
        when={{ from: "Dec '18", to: "now" }}
        content={`
This is some text about Come Alive, and my role in the organization.
And this is a summary of my experience.

- This is one achomplishment from Come Alive
- This is another achomplishment from Come Alive
          `}
      />
    </Section>
  );
}

export default Jobs;
