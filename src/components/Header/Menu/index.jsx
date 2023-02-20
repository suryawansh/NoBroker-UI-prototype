import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Button, Grid } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      menu
      <DehazeIcon />
      <br></br>
      <Button
        variant="text"
        sx={{
          borderRadius: 5,
          height: 50,
          backgroundColor: "#FC299E",
          border: "1px solid pink",
          color: "white",
          position: "top right",
          justifyContent: "center",
          padding: 2,
          fontSize: 12,
          "&:hover": {
            color: "#FC299E",
            border: "1px solid #FC299E",
            backgroundColor: "white",
          },
        }}
      >
        post your property
      </Button>
      <ToggleButton
        value="list"
        aria-label="list"
        position="absolute"
        sx={{ border: "none", color: "black" }}
      >
        <MenuIcon />
      </ToggleButton>
    </Grid>
  );
};
export default Menu;
