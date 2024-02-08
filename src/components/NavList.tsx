import React from "react";
import { ButtonGroup } from "@mui/material";
import NavItem from "./NavItem";

const mockData: string[] = ["Main", "About", "Products", "Payment", "Contact"];

function NavList() {
  return (
    <div className="navContainer">
      <nav className="navContainer__elementsContainer">
        <ButtonGroup>
          {mockData.map((item) => (
            <NavItem name={item} key={1} />
          ))}
        </ButtonGroup>
      </nav>
    </div>
  );
}

export default NavList;
