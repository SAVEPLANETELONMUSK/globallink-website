import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import PublicIcon from "@mui/icons-material/Public";
import EmailIcon from "@mui/icons-material/Email";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#071B3B",
        color: "white",
        pt: 8,
        pb: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">

        <Grid container spacing={6}>

          {/* Company */}

          <Grid size={{ xs: 12, md: 5 }}>

            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
            >
              <PublicIcon
                sx={{
                  color: "#29B6F6",
                  fontSize: 34,
                }}
              />

              <Typography
                variant="h5"
                fontWeight="bold"
              >
                GlobalLink Express
              </Typography>

            </Box>

            <Typography
              sx={{
                mt: 3,
                color: "#CBD5E1",
                lineHeight: 1.8,
              }}
            >
              Connecting businesses and individuals through
              reliable worldwide logistics, freight forwarding,
              shipment tracking and premium delivery solutions.
            </Typography>

          </Grid>

          {/* Customer Support */}

          <Grid size={{ xs: 12, md: 4 }}>

            <Typography
              variant="h5"
              fontWeight="bold"
              mb={2}
            >
              24/7 Customer Support
            </Typography>

            <Typography
              sx={{
                color: "#CBD5E1",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Our logistics consultants are available 24 hours
              a day, 7 days a week to answer shipment questions,
              provide delivery updates and assist with worldwide
              shipping services.
            </Typography>

            <Button
              fullWidth
              variant="contained"
              color="success"
              startIcon={<SupportAgentIcon />}
              href="#"
              sx={{
                py: 1.5,
                fontWeight: "bold",
              }}
            >
              Chat with a Consultant
            </Button>

          </Grid>

          {/* Newsletter */}

          <Grid size={{ xs: 12, md: 3 }}>

            <Typography
              variant="h5"
              fontWeight="bold"
              mb={2}
            >
              Stay Updated
            </Typography>

            <Typography
              sx={{
                color: "#CBD5E1",
                mb: 2,
              }}
            >
              Receive logistics updates, shipment news and
              service announcements.
            </Typography>

            <TextField
              fullWidth
              size="small"
              placeholder="Email Address"
              variant="filled"
              sx={{
                bgcolor: "white",
                borderRadius: 1,
              }}
            />

            <Button
              fullWidth
              variant="contained"
              color="warning"
              startIcon={<EmailIcon />}
              sx={{
                mt: 2,
              }}
            >
              Subscribe
            </Button>

          </Grid>

        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,.15)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >

          <Typography color="#CBD5E1">
            © 2026 GlobalLink Express. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
              }}
            >
              Privacy Policy
            </Typography>

            <Typography
              sx={{
                cursor: "pointer",
              }}
            >
              Terms & Conditions
            </Typography>

            <Typography
              sx={{
                cursor: "pointer",
              }}
            >
              Cookies
            </Typography>

          </Box>

        </Box>

      </Container>
    </Box>
  );
}
