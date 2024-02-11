import React from "react";

interface FooterLinkProps {
  name: string;
}

function FooterLink({ name }: FooterLinkProps) {
  return <div className="footer__items">{name}</div>;
}

export default FooterLink;
