const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { LRUCache } = require("lru-cache"); // Correct import for lru-cache

// Configure LRU Cache for session management
const cache = new LRUCache({
  max: 500, // Maximum number of items in the cache
  ttl: 1000 * 60 * 60, // 1 hour (ttl instead of maxAge)
});

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { fullName, username, designation, password, isAdmin } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      username,
      designation,
      password: hashedPassword,
      isAdmin,
    });

    const savedUser = await newUser.save();

    // Create a JWT token
    const token = jwt.sign(
      { id: savedUser._id, isAdmin: savedUser.isAdmin },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Store token in cache
    cache.set(token, true);

    res.status(201).json({ user: savedUser, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Middleware to verify token
exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  // Check if token is in cache
  if (!cache.get(token)) {
    return res.status(401).json({ error: "Invalid token" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ error: "Failed to authenticate token" });

    req.userId = decoded.id;
    req.isAdmin = decoded.isAdmin;
    next();
  });
};

// Get all users (protected route)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a user by ID (protected route)
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a user (protected route)
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user (protected route)
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// User login
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    // Create a JWT token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Store token in cache
    cache.set(token, true);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Logout a user
exports.logoutUser = (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(400).json({ error: "No token provided" });
  }

  // Remove token from cache
  cache.delete(token);

  res.status(200).json({ message: "Logged out successfully" });
};
