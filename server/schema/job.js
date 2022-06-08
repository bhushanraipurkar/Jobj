const mongoose = require('mongoose');

const job__schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
    },
    topic: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    noopen: {
      type: Number,
      required: true,
    },
    postrequired: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
      min: 3000,
    },
    time: {
      type: String,
      enum: ['full', 'part'],
      default: 'full',
    },
    experience: {
      type: Number,
      default: 0,
    },
    contact: {
      type: Number,
      required: true,
      minlength: 10,
      maxlength: 12,
    },
    hiring: {
      type: Boolean,
      default: true,
    },
    // type: {
    //   type: String,
    //   required: true,
    // },
    pgender: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    aadhar: {
      type: String,
      required: true,
    },
    rphoto: {
      type: String,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    appliedby: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', job__schema);
module.exports = Job;
