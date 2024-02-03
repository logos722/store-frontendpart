import React from "react";

interface NavItemProps {
  name: string;
}

function NavItem({ name }: NavItemProps) {
  return <div>{name}</div>;
}

export default NavItem;
