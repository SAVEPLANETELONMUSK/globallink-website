import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Rating,
} from "@mui/material";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Import & Export Manager",
    review:
      "The shipment tracking interface is clear and made it easy to follow our delivery.",
  },
  {
    name: "Sarah Williams",
    role: "Business Customer",
    review:
      "Professional communication and straightforward logistics throughout the shipment.",
  },
  {
    name: "David Chen",
    role: "Supply Chain Coordinator",
    review:
      "The tracking updates helped our team plan deliveries more efficiently.",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 10, bgcolor: "#fff" }}>
      <Container maxWidth="xl">

        <Typography
          variant="overline"
          color="primary"
          fontWeight="bold"
        >
          TESTIMONIALS
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          mb={2}
        >
          What Customers Say
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ maxWidth: 700, mb: 6 }}
        >
          Feedback from customers who have used our logistics platform.
        </Typography>

        <Grid container spacing={4}>

          {testimonials.map((item) => (

            <Grid
              key={item.name}
              size={{ xs: 12, md: 4 }}
            >

              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                }}
              >

                <Rating
                  value={5}
                  readOnly
                />

                <Typography
                  sx={{
                    mt: 3,
                    mb: 4,
                  }}
                >
                  "{item.review}"
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >

                  <Avatar>
                    {item.name.charAt(0)}
                  </Avatar>

                  <Box>

                    <Typography fontWeight="bold">
                      {item.name}
                    </Typography>

                    <Typography
                      color="text.secondary"
                    >
                      {item.role}
                    </Typography>

                  </Box>

                </Box>

              </Paper>

            </Grid>

          ))}

        </Grid>

      </Container>
    </Box>
  );
}
