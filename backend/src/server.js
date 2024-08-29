require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const announcementMessageRoutes = require("./routes/announcementMessageRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://daawat-admin.vercel.app",
  "http://localhost:3000",
  "http://localhost:3001",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));

// Middleware setup
app.use(bodyParser.json());

// Api Routes
app.use("/api", userRoutes);
app.use("/api", announcementMessageRoutes);

// Default route handler
app.get("/", (req, res) => {
  res.send("Server is Running");
});

// Connect to MongoDB
connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
