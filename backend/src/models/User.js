const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true }, // Added Full Name field
  designation: {
    type: String,
    enum: [
      "CEO",
      "Inventory Manager",
      "Catering Manager",
      "Sales Manager",
      "Administrator",
      "Accounts Manager",
      "Head Chef",
      "Staff Manager",
    ],
    required: true,
  }, // Added Designation field
  isAdmin: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false }, // Added isActive field
  lastLogin: { type: Date, default: null }, // Added lastLogin field
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to generate JWT token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      fullName: this.fullName, // Added fullName to the JWT payload
      designation: this.designation, // Added designation to the JWT payload
      isAdmin: this.isAdmin,
      isActive: this.isActive, // Added isActive to the JWT payload
      lastLogin: this.lastLogin, // Added lastLogin to the JWT payload
    },
    process.env.JWT_SECRET
    // { expiresIn: "1h" }
  );
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
