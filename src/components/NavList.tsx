import React, { useState } from "react";
import NavItem from "./NavItem";

const mockData: string[] = ["Main", "About", "Products", "Payment", "Contact"];

function NavList() {
  return (
    <div>
      <nav>
        {mockData.map((item, index) => (
          <NavItem name={item} key={index} />
        ))}
      </nav>
    </div>
  );
}

export default NavList;
