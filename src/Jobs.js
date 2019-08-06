import React from "react";

import Section from "./Section";
import Item from "./Item";

function Jobs() {
  return (
    <Section title="Jobs">
      <Item
        title="Software Engineer"
        where="128 Technology in Burlington, MA"
        when={{ from: "May '18", to: "present" }}
        content={`
Full-time software engineer, currently on the Analytics team using primarily C++. 

- Led a multi-team project to upgrade the CentOS dependency and resolve security vulnerabilities
- Setup a continuously-building Jenkins pipeline to address build problems 24 hours sooner than before
- Wrote an Analytics stack framework for integration tests, now used by 50% of tests
- Created and evaluated a concrete direction for the Analytics team that is shaping the team's future
- Distributed tooling around ELK for recording performance metrics history during critical scaling effort
        `}
      />
      <Item
        title="IT Lead"
        where="Come Alive Communications in West Grove, PA (Remote)"
        when={{ from: "Dec '18", to: "present" }}
        content={`
Part-time technical consultant for a translation company.

- Setup Plunet (a translation management system) in AWS EC2 for company training
- Built features on top of Plunet to customize registration and include company brand
- Currently designing and developing a client portal for facilitating orders and automating workflows
        `}
      />
      <Item
        title="Software Intern"
        where="WPI UXDM Lab in Worcester, MA"
        when={{ from: "Apr '17", to: "May '18" }}
        content={`
Part-time intern for a user-experience research lab specializing in eye-tracking.

-	Wrote software for recording and analyzing eye movement using C#, Vuejs and Tobii hardware SDK 
-	Managed sprints, features, and testing using GitLab issues with CI to improve communication and consistency
        `}
      />
      <Item
        title="Software Intern"
        where="Minim in Manchester, NH"
        when={{ from: "Dec '17", to: "Jan '18" }}
        content={`
Full-time intern for a few weeks during a school winter break with a 7-person startup.

- Learned Ruby and contributed quickly, delivering on the first day
- Developed a feature to capture additional network behavior data now used to identify new types of devices
- Added a new router to the existing flashing tool using PhantomJS to support additional customer deployments
        `}
      />
      <Item
        title="Software Intern"
        where="Jacobs Engineering in Nashua, NH"
        when={{ from: "May '16", to: "Mar '17" }}
        content={`
Full-time intern on a team of 6 engineers building aerial mission planning software.

- Operated autonomously to design, implement and test product code with C#, C++, WPF, and TFS
-	Communicated the status of my work effectively in daily Scrum meetings, resolving over 100 issues
-	Continued to develop remotely part-time throughout the following school year 
-	Designed and built a standalone tool for determining whether compiled mission files were up to date
       `}
      />
    </Section>
  );
}

export default Jobs;
