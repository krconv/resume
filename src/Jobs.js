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
Full-time software engineer, originally on Systems (product infrastructure) 
team, moved to Analytics. Quickly came up to speed, currently building 
Analytics features and attempting to find and resolve organization-wide 
problems.

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
Serving as a part-time technical consultant. Work independently for a few hours 
per week to support Come Alive, learning as I go and building what the business 
needs.

- Setup and maintained a production-grade translation management system called 
  Plunet
- Augmented the system to provide a registration page, a landing page, and our 
  company branding
        `}
      />
      <Item
        title="Software Intern"
        where="Minim in Manchester, NH"
        when={{ from: "Dec '17", to: "Jan '18" }}
        content={`
Developed only for a few weeks during my winter school break. This was an awesome
opportunity to work with a leader that I've respected and admired for a while.

- Made contributions in days after developing in Ruby for my first time
- Developed an additional method for fingerprinting IoT devices using 
  periodicities
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
