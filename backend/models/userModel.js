const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'], // You can customize the roles as needed
      default: 'user', // Set a default role
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
