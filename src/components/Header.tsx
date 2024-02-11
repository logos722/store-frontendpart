import React from "react";
import { Button, TextField } from "@mui/material";

function Header() {
  return (
    <div className="head">
      <div className="head__container">
        <div className="head__container-item">
          <img src="" alt="#zaglushka" />
        </div>
        <div className="head__container-item">
          <TextField
            id="outlined-basic"
            label="Поиск"
            variant="outlined"
            inputProps={{
              style: {
                height: 15, // Change the height here
              },
            }}
          />
        </div>
        <div className="head__container-item">
          8 (800) 22-22-472 интернет-магазин{" "}
        </div>
        <div className="head__container-item">
          <Button
            variant="contained"
            sx={{
              color: "#FFF5FC",
              bgcolor: "#1CA465",
            }}
          >
            Войти
          </Button>
          <div className="head__container-subButton">В личный кабинет</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
