import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";

import PublicIcon from "@mui/icons-material/Public";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function Coverage() {
  return (
    <Box
      sx={{
        py: 10,
        background: "#ffffff",
      }}
    >
      <Container maxWidth="xl">

        <Typography
          variant="overline"
          color="primary"
          fontWeight="bold"
        >
          GLOBAL COVERAGE
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Worldwide Shipping Network
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 700,
            mb: 6,
          }}
        >
          We support international shipping through air, sea,
          road, and premium courier services with shipment
          tracking and logistics management.
        </Typography>

        <Grid container spacing={3}>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
              <PublicIcon sx={{ fontSize: 60, color: "#0A2A66" }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                International Coverage
              </Typography>
              <Typography mt={2}>
                Shipment management for domestic and international destinations.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
              <FlightIcon sx={{ fontSize: 60, color: "#0A2A66" }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                Air Freight
              </Typography>
              <Typography mt={2}>
                Fast transport for urgent international deliveries.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
              <DirectionsBoatIcon sx={{ fontSize: 60, color: "#0A2A66" }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                Ocean Freight
              </Typography>
              <Typography mt={2}>
                Cost-effective shipping for larger cargo movements.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
              <LocalShippingIcon sx={{ fontSize: 60, color: "#0A2A66" }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                Road Logistics
              </Typography>
              <Typography mt={2}>
                Reliable regional transportation and last-mile delivery.
              </Typography>
            </Paper>
          </Grid>

        </Grid>

        <Box
          sx={{
            textAlign: "center",
            mt: 7,
          }}
        >
          <Button
            variant="contained"
            size="large"
          >
            Explore Our Services
          </Button>
        </Box>

      </Container>
    </Box>
  );
}
