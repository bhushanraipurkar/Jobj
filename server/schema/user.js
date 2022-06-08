const mongoose = require('mongoose');

const user__scema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      minlength: 6,
    },
    phone: {
      type: Number,
      minlength: 10,
      maxlength: 10,
    },
  },

  { timestamps: true }
);

const User = mongoose.model('User', user__scema);
module.exports = User;
