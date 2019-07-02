import React from "react";

import Section from "./Section";
import Item from "./Item";

function Education() {
  return (
    <Section title="Education">
      <Item
        title="Computer Science"
        where="Worcester Polytechnic Institute in Worcester, MA"
        when={{ to: "May '18" }}
        content={`
*Bachelor of Science in Computer Science*, 3.95 GPA 

- Learned from and advised 100+ first-year students as a Resident Advisor
- Participated in Pep Band, Student Support Network, Manufacturing Shop, Flag Football, and Upsilon Pi Epsilon
      `}
      />
    </Section>
  );
}

export default Education;
