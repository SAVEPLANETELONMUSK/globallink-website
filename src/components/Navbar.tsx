import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

import PublicIcon from "@mui/icons-material/Public";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        backgroundColor: "#071B3B",
      }}
    >
      <Container maxWidth="lg">

        <Toolbar
          disableGutters
          sx={{
            height: 72,
            display: "flex",
            justifyContent: "space-between",
          }}
        >

          {/* Logo */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <PublicIcon
              sx={{
                color: "#29B6F6",
                fontSize: 32,
              }}
            />

            <Box>

              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ lineHeight: 1 }}
              >
                GlobalLink Express
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: "#B0BEC5",
                }}
              >
                Worldwide Logistics
              </Typography>

            </Box>

          </Box>

          {/* Navigation */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 1,
            }}
          >

            <Button color="inherit">Home</Button>

            <Button color="inherit">Track</Button>

            <Button color="inherit">Services</Button>

            <Button color="inherit">Business</Button>

            <Button color="inherit">Contact</Button>

          </Box>

          {/* Right Buttons */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >

            <Button
              color="inherit"
              sx={{
                textTransform: "none",
              }}
            >
              Sign In
            </Button>

            <Button
              variant="contained"
              color="warning"
              sx={{
                borderRadius: 8,
                px: 3,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Get Quote
            </Button>

          </Box>

        </Toolbar>

      </Container>
    </AppBar>
  );
}
