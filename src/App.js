import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Typography, { Grid } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Grid
      container
      direction="column"
      alignItems={"center"}
      justifyContent="center"
      spacing={12}
    >
      <Grid item xs={10}>
        <Header />
      </Grid>
      <Grid item xs={10}>
        <Carousel />
      </Grid>
      <Grid item xs={10}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
