import {
  Box,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Chip,
  Divider,
} from "@mui/material";

export default function TrackingResult({ shipment }: any) {
  if (!shipment) return null;

  const steps = shipment.timeline?.map((e: any) => e.status) || [];

  return (
    <Paper
      elevation={3}
      sx={{
        mt: 5,
        p: 5,
        borderRadius: 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Shipment Details
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography>
        <strong>Tracking Number:</strong>{" "}
        {shipment.shipment.tracking_number}
      </Typography>

      <Typography mt={2}>
        <strong>Status:</strong>{" "}
        <Chip
          label={shipment.shipment.current_status}
          color="success"
        />
      </Typography>

      <Typography mt={2}>
        <strong>Current Location:</strong>{" "}
        {shipment.shipment.current_location}
      </Typography>

      <Typography mt={2}>
        <strong>Origin:</strong>{" "}
        {shipment.shipment.origin_country}
      </Typography>

      <Typography mt={2}>
        <strong>Destination:</strong>{" "}
        {shipment.shipment.destination_country}
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" fontWeight="bold" mb={3}>
        Shipment Timeline
      </Typography>

      <Stepper
        orientation="vertical"
        activeStep={steps.length}
      >
        {shipment.timeline?.map((item: any) => (
          <Step key={item.updated_at} active completed>
            <StepLabel>
              <Typography fontWeight="bold">
                {item.status}
              </Typography>

              <Typography variant="body2">
                {item.location}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
              >
                {new Date(item.updated_at).toLocaleString()}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
}
