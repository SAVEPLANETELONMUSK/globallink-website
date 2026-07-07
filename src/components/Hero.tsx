	import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,#003b8f 0%,#0f6ad8 100%)",
        color: "white",
        py: 12,
      }}
    >
      <Container maxWidth="xl">

        <Grid container spacing={6} alignItems="center">

          <Grid size={{ xs: 12, md: 7 }}>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >

              <Typography
                variant="h2"
                fontWeight="bold"
              >
                Worldwide Logistics &
                Premium Delivery
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  mb: 5,
                  fontSize: 22,
                }}
              >
                Air Freight • Ocean Freight •
                Road Transport • Private Courier
              </Typography>

              <Paper
                sx={{
                  p: 2,
                  borderRadius: 4,
                  display: "flex",
                  gap: 2,
                }}
              >

                <TextField
                  fullWidth
                  placeholder="Enter Tracking Number"
                />

                <Button
                  variant="contained"
                  color="warning"
                  startIcon={<SearchIcon />}
                >
                  Track
                </Button>

              </Paper>

              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  gap: 2,
                }}
              >

                <Button
                  variant="contained"
                  size="large"
                  color="warning"
                >
                  Ship Now
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  Get Quote
                </Button>

              </Box>

            </motion.div>

          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>

            <Grid container spacing={3}>

              <Grid size={{ xs: 6 }}>

                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                  }}
                >
                  <PublicIcon
                    sx={{
                      fontSize: 50,
                      color: "#0A2A66",
                    }}
                  />

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                  >
                    220+
                  </Typography>

                  <Typography>
                    Countries
                  </Typography>

                </Paper>

              </Grid>

              <Grid size={{ xs: 6 }}>

                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                  }}
                >
                  <LocalShippingIcon
                    sx={{
                      fontSize: 50,
                      color: "#0A2A66",
                    }}
                  />

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                  >
                    2M+
                  </Typography>

                  <Typography>
                    Deliveries
                  </Typography>

                </Paper>

              </Grid>

              <Grid size={{ xs: 12 }}>

                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                  }}
                >
                  <VerifiedUserIcon
                    sx={{
                      fontSize: 55,
                      color: "#0A2A66",
                    }}
                  />

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                  >
                    99.9%
                  </Typography>

                  <Typography>
                    Secure Shipments
                  </Typography>

                </Paper>

              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}
