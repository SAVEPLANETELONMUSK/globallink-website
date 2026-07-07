import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const shipments = [];

// Generate tracking number
function generateTracking() {
    return "GLX" + Date.now().toString().slice(-8) + Math.floor(Math.random() * 90 + 10);
}

// Create shipment
app.post("/api/shipments", (req, res) => {

    const {
        sender,
        receiver,
        origin,
        destination,
        status,
        expectedDelivery
    } = req.body;

    const shipment = {
        trackingNumber: generateTracking(),
        sender,
        receiver,
        origin,
        destination,
        status: status || "Shipment Created",
        expectedDelivery,
        createdAt: new Date().toISOString(),
        history: [
            {
                status: status || "Shipment Created",
                location: origin,
                time: new Date().toISOString()
            }
        ]
    };

    shipments.push(shipment);

    res.json({
        success: true,
        shipment
    });

});

// Track shipment
app.get("/api/track/:tracking", (req, res) => {

    const shipment = shipments.find(
        s => s.trackingNumber === req.params.tracking
    );

    if (!shipment) {
        return res.status(404).json({
            success: false,
            message: "Tracking number not found."
        });
    }

    res.json({
        success: true,
        shipment
    });

});

// Update shipment
app.put("/api/shipments/:tracking", (req, res) => {

    const shipment = shipments.find(
        s => s.trackingNumber === req.params.tracking
    );

    if (!shipment) {
        return res.status(404).json({
            success: false,
            message: "Shipment not found."
        });
    }

    shipment.status = req.body.status || shipment.status;

    shipment.history.push({
        status: shipment.status,
        location: req.body.location || shipment.destination,
        time: new Date().toISOString()
    });

    res.json({
        success: true,
        shipment
    });

});

// List shipments
app.get("/api/shipments", (req, res) => {

    res.json({
        success: true,
        total: shipments.length,
        shipments
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`GlobalLink Express API running on port ${PORT}`);
});
