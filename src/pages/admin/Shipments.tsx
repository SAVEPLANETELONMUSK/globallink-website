import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import api from "../../services/api";

export default function Shipments() {
  const [form, setForm] = useState({
    sender_name: "",
    receiver_name: "",
    origin_country: "",
    destination_country: "",
    weight: "",
    price: "",
  });

  async function createShipment() {
    try {
      const res = await api.post("/shipments", {
        ...form,
        weight: Number(form.weight),
        price: Number(form.price),
      });

      alert(
        `Shipment created.\nTracking Number: ${res.data.tracking_number}`
      );
    } catch {
      alert("Unable to create shipment.");
    }
  }

  return (
    <Box p={5}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Create Shipment
      </Typography>

      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Grid container spacing={3}>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Sender Name"
              value={form.sender_name}
              onChange={(e) =>
                setForm({ ...form, sender_name: e.target.value })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Receiver Name"
              value={form.receiver_name}
              onChange={(e) =>
                setForm({ ...form, receiver_name: e.target.value })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Origin Country"
              value={form.origin_country}
              onChange={(e) =>
                setForm({ ...form, origin_country: e.target.value })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Destination Country"
              value={form.destination_country}
              onChange={(e) =>
                setForm({
                  ...form,
                  destination_country: e.target.value,
                })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Weight (kg)"
              value={form.weight}
              onChange={(e) =>
                setForm({ ...form, weight: e.target.value })
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Price"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              variant="contained"
              size="large"
              onClick={createShipment}
            >
              Create Shipment
            </Button>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  );
}
