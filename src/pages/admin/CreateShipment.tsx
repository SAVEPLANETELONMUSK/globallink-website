import { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

export default function CreateShipment() {

  const [form, setForm] = useState({
    sender_name: "",
    receiver_name: "",
    sender_phone: "",
    receiver_phone: "",
    origin_country: "",
    origin_city: "",
    destination_country: "",
    destination_city: "",
    weight: "",
    price: "",
  });

  const change = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function createShipment() {

    const token = localStorage.getItem("adminToken");

    const res = await fetch(
      "http://127.0.0.1:3001/shipments",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          weight: Number(form.weight),
          price: Number(form.price),
        }),
      }
    );

    const data = await res.json();

    if (data.tracking_number) {
      alert(
        "Shipment Created!\n\nTracking Number:\n" +
        data.tracking_number
      );
    } else {
      alert(data.message);
    }
  }

  return (
    <Paper
      sx={{
        maxWidth: 900,
        mx: "auto",
        p: 4,
      }}
    >

      <Typography
        variant="h4"
        mb={4}
      >
        Create Shipment
      </Typography>

      <Grid container spacing={2}>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Sender Name"
            name="sender_name"
            onChange={change}
          />
        </Grid>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Receiver Name"
            name="receiver_name"
            onChange={change}
          />
        </Grid>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Sender Phone"
            name="sender_phone"
            onChange={change}
          />
        </Grid>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Receiver Phone"
            name="receiver_phone"
            onChange={change}
          />
        </Grid>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Origin Country"
            name="origin_country"
            onChange={change}
          />
        </Grid>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Origin City"
            name="origin_city"
            onChange={change}
          />
        </Grid>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Destination Country"
            name="destination_country"
            onChange={change}
          />
        </Grid>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Destination City"
            name="destination_city"
            onChange={change}
          />
        </Grid>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Weight (kg)"
            name="weight"
            onChange={change}
          />
        </Grid>

        <Grid size={{ xs:12, md:6 }}>
          <TextField
            fullWidth
            label="Shipping Price"
            name="price"
            onChange={change}
          />
        </Grid>

      </Grid>

      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt:4 }}
        onClick={createShipment}
      >
        Create Shipment
      </Button>

    </Paper>
  );
}
