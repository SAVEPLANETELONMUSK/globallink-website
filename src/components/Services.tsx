import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";

import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DiamondIcon from "@mui/icons-material/Diamond";
import BusinessIcon from "@mui/icons-material/Business";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const services = [
  {
    icon: <FlightIcon sx={{ fontSize: 50 }} />,
    title: "Air Freight",
    text: "Fast international air cargo."
  },
  {
    icon: <DirectionsBoatIcon sx={{ fontSize: 50 }} />,
    title: "Ocean Freight",
    text: "Worldwide sea freight solutions."
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50 }} />,
    title: "Road Transport",
    text: "Reliable ground logistics."
  },
  {
    icon: <DiamondIcon sx={{ fontSize: 50 }} />,
    title: "Private Courier",
    text: "Secure transport for high-value shipments."
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 50 }} />,
    title: "Business Logistics",
    text: "Enterprise supply chain services."
  },
  {
    icon: <Inventory2Icon sx={{ fontSize: 50 }} />,
    title: "Warehousing",
    text: "Global storage and distribution."
  }
];

export default function Services() {
  return (
    <Box sx={{ py: 10, bgcolor: "#f7f9fc" }}>
      <Container>

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          mb={6}
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>

          {services.map((item) => (

            <Grid size={{ xs: 12, md: 4 }} key={item.title}>

              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: 4,
                  height: "100%",
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-8px)"
                  }
                }}
              >

                <CardContent>

                  {item.icon}

                  <Typography
                    variant="h5"
                    mt={2}
                    fontWeight="bold"
                  >
                    {item.title}
                  </Typography>

                  <Typography mt={2}>
                    {item.text}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>
    </Box>
  );
}
