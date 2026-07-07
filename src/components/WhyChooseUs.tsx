import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";

const features = [
  {
    title: "Live Shipment Tracking",
    text: "Monitor shipment progress with real-time tracking updates.",
    icon: <TrackChangesIcon sx={{ fontSize: 42 }} />,
  },
  {
    title: "Secure Logistics",
    text: "Designed to help protect shipments throughout the delivery process.",
    icon: <SecurityIcon sx={{ fontSize: 42 }} />,
  },
  {
    title: "Dedicated Support",
    text: "Customer support for shipment questions and delivery assistance.",
    icon: <SupportAgentIcon sx={{ fontSize: 42 }} />,
  },
  {
    title: "Business Shipping",
    text: "Shipping solutions for businesses of different sizes.",
    icon: <BusinessCenterIcon sx={{ fontSize: 42 }} />,
  },
  {
    title: "Verified Delivery",
    text: "Delivery workflows with shipment status confirmation.",
    icon: <VerifiedUserIcon sx={{ fontSize: 42 }} />,
  },
  {
    title: "Global Network",
    text: "International shipping routes and logistics management.",
    icon: <PublicIcon sx={{ fontSize: 42 }} />,
  },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: 10, bgcolor: "#f5f7fb" }}>
      <Container maxWidth="xl">

        <Typography
          variant="overline"
          color="primary"
          fontWeight="bold"
        >
          WHY CHOOSE US
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          mb={2}
        >
          Reliable Logistics Solutions
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ maxWidth: 700, mb: 6 }}
        >
          GlobalLink Express combines shipment management,
          tracking technology, and customer support to help
          simplify domestic and international deliveries.
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid
              key={feature.title}
              size={{ xs: 12, sm: 6, md: 4 }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                {feature.icon}

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mt={2}
                >
                  {feature.title}
                </Typography>

                <Typography mt={2}>
                  {feature.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}
