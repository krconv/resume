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
Full-time software engineer in networking industry, started with Systems team 
(product infrastructure), moved to Analytics (team of 2) about 8 months later. 
Also spend time finding and trying out new ideas to improve our company.

- Lead a multi-team project to upgrade the CentOS dependency of the product
- Created and evaluated a concrete direction for the Analytics team
- Setup a continuously-building Jenkins pipeline to address build problems 24 
  hours sooner
- Wrote a framework to manage our Analytics stack for integration testing
        `}
      />
      <Item
        title="IT Lead"
        where="Come Alive Communications in West Grove, PA (Remote)"
        when={{ from: "Dec '18", to: "now" }}
        content={`
Part-time technical consultant for a translation company. Work independently for 
a few hours per week, learning as I go and building what the business needs.

- Setup a production-ready translation management system called Plunet
- Augmented Plunet to create a registration and a landing page with our company 
  branding
        `}
      />
      <Item
        title="Software Intern"
        where="Minim in Manchester, NH"
        when={{ from: "Dec '17", to: "Jan '18" }}
        content={`
Full-time intern for a few weeks during my winter break with a 7-person start up.

- Made contributions quickly after developing in Ruby for my first time
- Developed an additional method for fingerprinting IoT devices using 
  periodicities
- Created a tool to automate the process of flashing home routers using PhantomJS
        `}
      />
      <Item
        title="Others"
        content={`
Software Intern at WPI UXDM Lab, Resident Advisor at WPI, Software Intern at Jacobs Engineering
        `}
        short
      />
    </Section>
  );
}

export default Jobs;
