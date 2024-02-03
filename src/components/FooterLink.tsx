import React from "react";

interface FooterLinkProps {
  name: string;
}

function FooterLink({ name }: FooterLinkProps) {
  return <div>{name}</div>;
}

export default FooterLink;
