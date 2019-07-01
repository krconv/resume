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

- This is one achomplishment from WPI
- This is another achomplishment from WPI
      `}
    />
    </Section>
  );
}

export default Education;
