import React from "react";
import { TextField, Button, Grid, Box } from "@mui/material";

const Carousel = () => {
  return (
    <Grid
      spacing={12}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding={20}
    >
      <Grid item xs={12} md={6}>
        <img src="packers.jpg" alt="house img missing"></img>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          variant="outlined"
          label="Output"
          sx={{
            width: 350,
            height: 350,
            boxShadow: 10,
            wordWrap: "break-word",
            borderRadius: 10,
            padding: 5,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#EFF48E",
              height: 40,
              borderRadius: 10,
              border: "none",
              color: "#213E3B",
              padding: 2,
              margin: 2,
            }}
          >
            intercity
          </Button>

          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#FFFFFF",
              height: 40,
              borderRadius: 10,
              border: "4px solid #ddd",
              color: "#213E3B",
              padding: 2,
            }}
          >
            outstation
          </Button>
          <TextField
            id="standard-basic"
            label="Where from ?"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              width: "100%",
              margin: "5px 0",
              textIndent: 15,
              borderBottom: "4px solid #ddd",
              padding: "4px",
              background: "transparent",
              color: "#213E3B",
            }}
          />
          <TextField
            id="standard-basic"
            label="Where to ?"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              width: "100%",
              margin: "5px 0",
              textIndent: 15,
              borderBottom: "4px solid #ddd",
              padding: "4px",
              background: "transparent",
              color: "#213E3B",
            }}
          />
          <TextField
            id="standard-basic"
            label="When ?"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              width: "100%",
              margin: "5px 0",
              textIndent: 15,
              borderBottom: "4px solid #ddd",
              padding: "4px",
              background: "transparent",
              color: "#213E3B",
            }}
          />
          <br></br>

          <Grid
            container
            xs="12"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="text"
              sx={{
                borderRadius: 5,
                height: 50,
                backgroundColor: "#FC299E",
                border: "none",
                color: "white",
                padding: 3,
                fontSize: 12,
                margin: 4,
                justifyContent: "flex-end",
              }}
            >
              Get a quote
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Carousel;
