import { Button } from "@mui/material";
import React from "react";

interface NavItemProps {
  name: string;
}

function NavItem({ name }: NavItemProps) {
  return (
    <div className="navContainer__elementsContainer__items">
      <Button
        sx={{ color: "#FFF5FC", bgcolor: "#1CA465", border: "solid 1px white" }}
      >
        {name}
      </Button>
    </div>
  );
}

export default NavItem;
