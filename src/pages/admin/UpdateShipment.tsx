import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const STATUS = [
  "Shipment Created",
  "Picked Up",
  "Arrived at Hub",
  "Departed Hub",
  "Air Transit",
  "Customs Clearance",
  "Out for Delivery",
  "Delivered",
];

export default function UpdateShipment() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Shipment Created");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  async function updateShipment() {
    const res = await fetch(
      `http://127.0.0.1:3001/tracking/${trackingNumber}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
          location,
          latitude: Number(latitude),
          longitude: Number(longitude),
        }),
      }
    );

    const data = await res.json();

    alert(data.message);
  }

  return (
    <Paper sx={{ maxWidth: 700, mx: "auto", p: 4 }}>

      <Typography variant="h4" mb={4}>
        Update Shipment
      </Typography>

      <TextField
        fullWidth
        label="Tracking Number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Current Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        margin="normal"
      />

      <TextField
        select
        fullWidth
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        margin="normal"
      >
        {STATUS.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>

        <TextField
          label="Latitude"
          fullWidth
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />

        <TextField
          label="Longitude"
          fullWidth
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />

      </Box>

      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 4 }}
        onClick={updateShipment}
      >
        Update Shipment
      </Button>

    </Paper>
  );
}
