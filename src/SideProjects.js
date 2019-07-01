import React from "react";

import Section from "./Section";
import Item from "./Item";

function SideProjects() {
  return (
    <Section title="Side Projects">
      <Item
        title="DIY Security Cameras"
        when={{ to: "now" }}
        content={`
A collection or Raspberry Pis running motion tracking softare.
        `}
        short
      />
      <Item
        title="DIY Security Cameras"
        when={{ to: "now" }}
        content={`
A collection or Raspberry Pis running motion tracking softare.
        `}
        short
      />
      <Item
        title="DIY Security Cameras"
        when={{ to: "now" }}
        content={`
A collection or Raspberry Pis running motion tracking softare.
        `}
        short
      />
      <Item
        title="DIY Security Cameras"
        when={{ to: "now" }}
        content={`
A collection or Raspberry Pis running motion tracking softare.
        `}
        short
      />
    </Section>
  );
}

export default SideProjects;
