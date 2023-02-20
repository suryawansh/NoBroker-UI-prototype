import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { styled } from "@mui/material/styles";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#213E3B",
    color: theme.palette.common.white,

    fontSize: 25,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    color: theme.palette.common.white,
    backgroundColor: "#213E3B",
    border: "0",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#213E3B",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: "0",
  },
}));

function createData(heading1, heading2, heading3) {
  return { heading1, heading2, heading3 };
}

const rows = [
  createData("About us  ", "List your property", "Help Center"),
  createData("Behind our new look", "Rent predictor", "Privacy policy"),
  createData("Our Brand Book", "Refer an owner", "terms of Use"),
  createData("Careers", "Refer a tenants"),
  createData("Trends & info", "Online Rent Agreement"),
  createData("Blog", "Coupon Codes"),
  createData("Contact us", "Top societies"),
];

const Footer = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      padding={10}
      paddingBottom={0}
      sx={{ backgroundColor: "#213E3B" }}
    >
      <Grid item xs={10}>
        <TableContainer component={Paper} sx={{ width: "80%" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ borderBottom: 0 }}>
                  Find my home
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: 0 }}>
                  For Owners & tenants
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: 0 }}>
                  More information
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ margin: 0 }}>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.heading1}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.heading2}</StyledTableCell>
                  <StyledTableCell align="left">{row.heading3}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        alignItems="flex-end"
        justifyContent="center"
        sx={{ color: "white" }}
      >
        <Grid item>Follow Us On</Grid>
        <Grid item alignItems="space-evenly">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </Grid>
      </Grid>
      <Grid item>
        <br />
        <img src="footer_image.jpg" alt="image" />
      </Grid>
    </Grid>
  );
};

export default Footer;
