import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import api from "../services/api";

export default function TrackingSearch() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function trackShipment() {
    if (!trackingNumber.trim()) return;

    setLoading(true);

    try {
      const response = await api.get(
        `/tracking/${trackingNumber}`
      );

      setResult(response.data);

    } catch {
      setResult({
        success: false,
        message: "Tracking number not found",
      });

    } finally {
      setLoading(false);
    }
  }

  return (
    <Box sx={{ mt: 8 }}>

      <Paper
        sx={{
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
        >
          Track Your Shipment
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            label="Tracking Number"
            value={trackingNumber}
            onChange={(e) =>
              setTrackingNumber(e.target.value)
            }
          />

          <Button
            variant="contained"
            color="warning"
            startIcon={<SearchIcon />}
            onClick={trackShipment}
          >
            Track
          </Button>
        </Box>

        {loading && (
          <Box sx={{ mt: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {result && (
          <Paper
            sx={{
              mt: 4,
              p: 3,
              bgcolor: "#f5f5f5",
            }}
          >
            <Typography fontWeight="bold">
              Status:
            </Typography>

            <Typography>
              {result.shipment?.current_status ??
                result.message}
            </Typography>

            {result.shipment && (
              <>
                <Typography sx={{ mt: 2 }}>
                  Current Location:
                </Typography>

                <Typography>
                  {result.shipment.current_location}
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Destination:
                </Typography>

                <Typography>
                  {result.shipment.destination_country}
                </Typography>
              </>
            )}
          </Paper>
        )}

      </Paper>

    </Box>
  );
}
