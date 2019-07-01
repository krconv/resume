import React from "react";

import Section from "./Section";
import Item from "./Item";

function SideProjects() {
  return (
    <Section title="Side Projects">
      <Item
        title="Security Cameras"
        when={{ to: "now" }}
        content={`
Building and assembling Raspberry Pi-based motion cameras for my apartment
        `}
        short
      />
      <Item
        title="128 Lottery"
        when={{ to: "June '19" }}
        content={`
A joke site using Jenkins builds to create fake lottery "winners"
        `}
        short
      />
      <Item
        title="Remote Garage Opener"
        when={{ to: "Jan '19" }}
        content={`
Connected a Raspberry Pi to an RF-remote to open a garage over the Internet
        `}
        short
      />
      <Item
        title="LED Desk Sign"
        when={{ to: "Aug '18" }}
        content={`
A matrix of LEDs that show an alert for lunch at 128 Technology
        `}
        short
      />
    </Section>
  );
}

export default SideProjects;
