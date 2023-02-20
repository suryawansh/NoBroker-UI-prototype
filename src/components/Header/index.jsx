import { AppBar, Toolbar, Grid } from "@mui/material";
import React from "react";
import Menu from "./Menu";

const Header = (props) => {
  return (
    <AppBar style={{ backgroundColor: "white", boxShadow: "none" }}>
      <Toolbar>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          margin={3}
          border={0}
          outlined
        >
          <img src="header_icon.jpg" alt="image" height={44} width={260} />
        </Grid>

        <Menu />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
