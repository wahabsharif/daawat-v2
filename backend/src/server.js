const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Use user routes
app.use("/api", userRoutes);

// Set the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
