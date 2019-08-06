import React from "react";

import Section from "./Section";
import Item from "./Item";

function Education() {
  return (
    <Section title="Education">
      <Item
        title="Computer Science"
        where="Worcester Polytechnic Institute in Worcester, MA"
        when={{ from: "Aug '15", to: "May '18" }}
        content={`
*Bachelor of Science in Computer Science*, 3.95 GPA 

Resident Advisor, Pep Band, Student Support Network, Manufacturing Shop, Flag Football, Upsilon Pi Epsilon
      `}
      />
    </Section>
  );
}

export default Education;
