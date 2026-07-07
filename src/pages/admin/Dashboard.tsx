import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";

export default function Dashboard() {

  const cards = [
    {
      title: "Total Shipments",
      value: "1,284",
      icon: <LocalShippingIcon sx={{ fontSize: 50 }} />
    },
    {
      title: "Active Deliveries",
      value: "346",
      icon: <Inventory2Icon sx={{ fontSize: 50 }} />
    },
    {
      title: "Countries",
      value: "Global",
      icon: <PublicIcon sx={{ fontSize: 50 }} />
    },
    {
      title: "Customers",
      value: "542",
      icon: <PeopleIcon sx={{ fontSize: 50 }} />
    }
  ];

  return (
    <Box p={5}>

      <Typography
        variant="h3"
        fontWeight="bold"
        mb={5}
      >
        GlobalLink Control Center
      </Typography>

      <Grid container spacing={3}>

        {cards.map(card => (

          <Grid
            key={card.title}
            size={{ xs: 12, md: 3 }}
          >

            <Paper
              elevation={4}
              sx={{
                p:4,
                borderRadius:4,
                textAlign:"center"
              }}
            >

              {card.icon}

              <Typography
                variant="h5"
                fontWeight="bold"
                mt={2}
              >
                {card.value}
              </Typography>

              <Typography color="text.secondary">
                {card.title}
              </Typography>

            </Paper>

          </Grid>

        ))}

      </Grid>

    </Box>
  );
}
